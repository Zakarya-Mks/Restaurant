(()=>{"use strict";class e{static setAttributes(e,t){for(let n in t)e.setAttribute(n,t[n])}static createElementWithClass(e,t){const n=document.createElement(e);return Array.isArray(t)?t.forEach((e=>n.classList.add(e))):n.classList.add(t),n}static creatLinks(e,t){const n=[];for(let a=0;a<t.length;a++){const s=document.createElement("a");s.textContent=t[a],e&&s.classList.add(e),n.push(s)}return n}static creatImages(e){const t=[];for(let n=0;n<e.length;n++){const a=document.createElement("img");this.setAttributes(a,e[n]),t.push(a)}return t}static creatListItems(e,t,n){for(let a=0;a<e.length;a++){const s=document.createElement("li");n&&s.classList.add(n),Array.isArray(e[a])?e[a].forEach((e=>{s.append(e)})):s.append(e[a]),t.append(s)}}static creatParagraphs(e){const t=[];for(let n=0;n<e.length;n++){const a=document.createElement("p");a.textContent=e[n],t.push(a)}return t}static creatInputs(e){const t=[];for(let n=0;n<e.length;n++){const a=document.createElement("input");this.setAttributes(a,e[n]),t.push(a)}return t}}const t=e.createElementWithClass("section","restaurant_presentation"),n=e.createElementWithClass("div","aligner"),a=e.createElementWithClass("div","breakfast_menu_presentation"),s=e.createElementWithClass("div","left-section"),o="Lorem, ipsum dolor sit amet consectetur adipisicing elit.\nCupiditate dolore fuga similique adipisci sit repudiandae\nquaerat enim unde soluta! Quia excepturi ex sit. Praesentium\nipsum quia, velit alias iusto laudantium molestiae sequi eius\ncommodi itaque.",c="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus\nexpedita ex praesentium ducimus nobis earum vitae quidem veniam\nreiciendis error. Ex eveniet earum quod atque magnam, placeat\nmodi dolorem doloribus nam illum rerum facilis minus!",i=document.createElement("h1");i.textContent="Daily Food Courses with Drinks";const r=e.creatParagraphs([o,c]),l=e.createElementWithClass("button","seeMenuBtn");l.textContent="see full menu",s.append(i),r.forEach((e=>s.append(e))),s.append(l);const m=e.createElementWithClass("div","right-section"),d=e.createElementWithClass("div","img-container");e.creatImages([{src:"../img/food1.jpg",alt:"hot cop of coffee"},{src:"../img/food2.png",alt:"a dish of potato with beans"}]).forEach((e=>d.append(e))),m.append(d);const p=e.createElementWithClass("div","lunch_menu_presentation"),u=e.createElementWithClass("div","left-section"),h=document.createElement("h1");h.textContent="Daily Food Courses with Drinks";const g=e.creatParagraphs([o,c]);u.append(h),g.forEach((e=>u.append(e)));const E=e.createElementWithClass("div","right-section"),v=e.createElementWithClass("div","img-container");e.creatImages([{src:"../img/food3.jpg",alt:"a crispy pancake"},{src:"../img/food4.png",alt:"steak in a plate"}]).forEach((e=>v.append(e))),E.append(v),a.append(s,m),p.append(u,E),n.append(a,p),t.append(n);const C=e.createElementWithClass("section","reservation_form"),f=e.createElementWithClass("div","aligner"),W=e.createElementWithClass("div","form-section"),b=document.createElement("form"),x=document.createElement("h1");x.textContent="Reservation Form";const L=e.creatInputs([{class:"form-control",type:"text",placeholder:"Name"},{class:"form-control",type:"email",placeholder:"Email Address"},{class:"form-control",type:"tel",placeholder:"Phone Number"},{class:"form-control",type:"number",placeholder:"Number Of People"},{class:"form-control",type:"datetime-local",placeholder:"Date And Time"},{class:"form-control",type:"text",placeholder:"Event"}]),y=document.createElement("button");y.textContent="make reservation",b.append(x),L.forEach((e=>b.append(e))),b.append(y),W.append(b),f.append(W),C.append(f);const w=e.createElementWithClass("section","in_association_with"),I=e.createElementWithClass("div","aligner"),q=document.createElement("h1");q.textContent="in association with";const k=e.creatParagraphs([o]),_=e.createElementWithClass("div","brandings");e.creatImages([{src:"../img/logo1.png"},{src:"../img/logo2.png"},{src:"../img/logo3.png"},{src:"../img/logo4.png"},{src:"../img/logo5.png"}]).forEach((e=>_.append(e))),I.append(q,k[0],_),w.append(I);const A=e.createElementWithClass("section","header"),M=e.createElementWithClass("section","navigation"),N=e.createElementWithClass("div",["burgerMenu","close"]),P=e.createElementWithClass("div","branding"),S=document.createElement("img");e.setAttributes(S,{class:"logo",src:"./img/logo.png",alt:"logo"}),P.append(S);const D=e.createElementWithClass("ul","nav"),H=e.creatImages([{src:"../img/nav-icon1.png",alt:"restaurant icon"},{src:"../img/nav-icon3.png",alt:"menu icon"},{src:"../img/nav-icon2.png",alt:"about icon"},{src:"../img/nav-icon8.png",alt:"contact icon"}]),B=e.creatLinks("nav-link",["Home","Menu","About","Contact"]),F=H.map(((e,t)=>[e,B[t]]));e.creatListItems(F,D,"nav-item"),[...D.children][0].classList.add("active"),M.append(N,P,D),A.append(M);const T=document.createElement("footer"),j=e.createElementWithClass("div","aligner"),$=document.createElement("ul"),R=e.creatLinks(null,["Home","Menu","About","Contact"]),z=document.createElement("span");z.textContent="Copyright ©2020 All rights reserved | made with &hearts; by\nZakarya-Mks",j.append($,z),T.append(j),e.creatListItems(R,$);const V=e.createElementWithClass("section","restaurant_menu"),O=e.createElementWithClass("div","aligner"),Q=e.createElementWithClass("div","appetizer_menu"),U=document.createElement("h1");U.textContent="Appetizer";const Z=document.createElement("ul"),G=document.createElement("h4");G.innerHTML="Ham & Potato Sandwiches <span>29$</span>";const J=document.createElement("p");J.textContent="(French bread baguette, cooked ham, potato salad)";let K=[];for(let e=0;e<4;e++)K.push([G.cloneNode(!0),J.cloneNode(!0)]);e.creatListItems(K,Z,null),Q.append(U,Z);const X=e.createElementWithClass("div","salade_dishes_menu"),Y=document.createElement("h1");Y.textContent="Side Dishes";const ee=document.createElement("ul"),te=document.createElement("h4");te.innerHTML="Ham & Potato Sandwiches <span>29$</span>";const ne=document.createElement("p");ne.textContent="(French bread baguette, cooked ham, potato salad)";let ae=[];for(let e=0;e<4;e++)ae.push([te.cloneNode(!0),ne.cloneNode(!0)]);e.creatListItems(ae,ee,null),X.append(Y,ee);const se=e.createElementWithClass("div","Main_Courses_menu"),oe=document.createElement("h1");oe.textContent="Main Courses";const ce=document.createElement("ul"),ie=document.createElement("h4");ie.innerHTML="Ham & Potato Sandwiches <span>29$</span>";const re=document.createElement("p");re.textContent="(French bread baguette, cooked ham, potato salad)";let le=[];for(let e=0;e<7;e++)le.push([ie.cloneNode(!0),re.cloneNode(!0)]);e.creatListItems(le,ce,null),se.append(oe,ce);const me=e.createElementWithClass("div","deserts_menu"),de=document.createElement("h1");de.textContent="Desserts";const pe=document.createElement("ul"),ue=document.createElement("h4");ue.innerHTML="Ham & Potato Sandwiches <span>29$</span>";const he=document.createElement("p");he.textContent="(French bread baguette, cooked ham, potato salad)";let ge=[];for(let e=0;e<4;e++)ge.push([ue.cloneNode(!0),he.cloneNode(!0)]);e.creatListItems(ge,pe,null),me.append(de,pe),O.append(Q,X,se,me),V.append(O);const Ee=e.createElementWithClass("section","restaurant_contact"),ve=e.createElementWithClass("div","aligner"),Ce=e.createElementWithClass("div","contact-form"),fe=e.createElementWithClass("div","restaurant-infos"),We=e.createElementWithClass("div","address"),be=e.creatImages({src:"https://www.flaticon.com/svg/static/icons/svg/263/263115.svg",width:"20",height:"20"}),xe=e.createElementWithClass("div","address-right-section"),Le=document.createElement("h4");Le.textContent="California, United States";const ye=document.createElement("p");ye.textContent="Santa monica boulevard",xe.append(Le,ye),We.append(be,xe);const we=e.createElementWithClass("div","phone"),Ie=e.creatImages({src:"https://www.flaticon.com/svg/static/icons/svg/455/455604.svg",width:"20",height:"20"}),qe=e.createElementWithClass("div","phone-right-section"),ke=document.createElement("h4");ke.textContent="00 (440) 9865 562";const _e=document.createElement("p");_e.textContent="Mon to Fri 9am to 6 pm",qe.append(ke,_e),we.append(Ie,qe);const Ae=e.createElementWithClass("div","email"),Me=e.creatImages({src:"https://www.flaticon.com/svg/static/icons/svg/482/482138.svg",width:"20",height:"20"}),Ne=e.createElementWithClass("div","email-right-section"),Pe=document.createElement("h4");Pe.textContent="support@Restaurant.com";const Se=document.createElement("p");Se.textContent="Send us your query anytime!",Ne.append(Pe,Se),Ae.append(Me,Ne),fe.append(We,we,Ae);const De=e.createElementWithClass("div","sender-infos"),He=e.createElementWithClass("div","divider");e.creatInputs([{class:"form-control",type:"text",placeholder:"Enter your name"},{class:"form-control",type:"email",placeholder:"Enter your email"},{class:"form-control",type:"text",placeholder:"Enter subject"}]).forEach((e=>{He.append(e)}));const Be=e.createElementWithClass("div","divider"),Fe=e.createElementWithClass("textarea","form-control");e.setAttributes(Fe,{cols:"30",rows:"10",placeholder:"Enter Message"});const Te=document.createElement("button");Be.append(Fe,Te),Te.textContent="send message",De.append(He,Be),Ce.append(fe,De),ve.append(Ce),Ee.append(ve);const je=e.createElementWithClass("section","about_restaurant"),$e=e.createElementWithClass("div","aligner"),Re=e.createElementWithClass("div","about_section"),ze=e.createElementWithClass("div","about-left"),Ve=e.creatImages([{src:"../img/chef1.jpg"}]);ze.append(Ve[0]);const Oe=e.createElementWithClass("div","about-right"),Qe=document.createElement("h1");Qe.textContent="Daily Food Courses with Drinks";const Ue=e.creatParagraphs(["Lorem ipsum dolor sit amet consectetur adipisicing elit.\nInventore exercitationem voluptatibus quia praesentium dicta\nsint, sed earum, voluptatum laboriosam dolores provident\naccusamus eveniet labore id, pariatur voluptatem? Veniam, odio\nmagnam."," Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore\naliquam laudantium debitis! Debitis, veniam esse reiciendis\nexcepturi aut incidunt nostrum porro quibusdam obcaecati quidem\neveniet pariatur in, repellat nisi. Vitae!"," Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nRepellat porro impedit omnis cupiditate, non labore praesentium\nquo voluptatum qui beatae culpa illo numquam deleniti sequi\nreprehenderit eveniet maxime commodi pariatur?"]),Ze=e.creatImages([{src:"../img/signature.png"}]);Oe.append(Qe),Ue.forEach((e=>Oe.append(e))),Oe.append(Ze[0]),Re.append(ze,Oe),$e.append(Re),je.append($e),document.querySelector("#content").append(A,t,C,w,T);const Ge={content:document.querySelector("#content"),nav:document.querySelector(".nav"),allNavItems:document.querySelectorAll(".nav-item"),seeMenuBtn:document.querySelector(".seeMenuBtn")};let Je=function(){const e=function(e){[...Ge.content.children].forEach((e=>{e!=A&&e!=T&&Ge.content.removeChild(e)})),"home"==e.toLowerCase()?(Ge.content.insertBefore(t,T),Ge.content.insertBefore(C,T),Ge.content.insertBefore(w,T)):"menu"==e.toLowerCase()?Ge.content.insertBefore(V,T):"contact"==e.toLowerCase()?Ge.content.insertBefore(Ee,T):"about"==e.toLowerCase()&&Ge.content.insertBefore(je,T)};return{navClick:t=>{if(t.target.closest(".nav-item")){let a=t.target.closest(".nav-item");n=a,Ge.allNavItems.forEach((e=>{n==e?e.classList.add("active"):e.classList.remove("active")})),e([...a.children][1].textContent)}var n},changeCurrentPage:e}}();Ge.nav.addEventListener("click",Je.navClick)})();