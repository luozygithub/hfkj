(function(e){function t(t){for(var o,a,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},i={app:0},r=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-3e9609ae":"f821e72f","chunk-03596683":"2388d4d3","chunk-2d2259e5":"a648be06","chunk-4e478620":"4b270e56","chunk-aa327e00":"71974267","chunk-bc603364":"86553eaf","chunk-d7adef2a":"2acb0926"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-03596683":1,"chunk-4e478620":1,"chunk-bc603364":1,"chunk-d7adef2a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-3e9609ae":"31d6cfe0","chunk-03596683":"98faea6d","chunk-2d2259e5":"31d6cfe0","chunk-4e478620":"696570be","chunk-aa327e00":"31d6cfe0","chunk-bc603364":"e1c93494","chunk-d7adef2a":"258e89ef"}[e]+".css",i=c.p+o,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===i))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){l=p[s],u=l.getAttribute("data-href");if(u===o||u===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[e],d.parentNode.removeChild(d),n(r)},d.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,n){o=i[e]=[t,n]}));t.push(o[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var p=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",p.name="ChunkLoadError",p.type=o,p.request=a,n[1](p)}i[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"14c0":function(e,t,n){"use strict";n("6f88")},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("d797"),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],r={name:"App",components:{}},s=r,c=(n("d105"),n("8619")),l=Object(c["a"])(s,a,i,!1,null,null,null),u=l.exports,p=n("19d6");const d={isConnected:e=>e.app.isConnected,account:e=>e.app.account};var h=d;const m={web3:null,account:"",isConnected:!1,chainId:666,ethBalance:0,isCollapse:!0},g={SET_ACCOUNT(e,t){e.account=t},SET_ISCONNECT(e,t){e.isConnected=t},SET_Web3(e,t){e.web3=t},SET_Balance(e,t){e.ethBalance=t},SET_SIDEBAR(e,t){e.isCollapse=t}},f={toggleSideBar({commit:e},t){e("SET_SIDEBAR",t)}};var b={namespaced:!0,state:m,mutations:g,actions:f};o["default"].use(p["a"]);var v=new p["a"].Store({getters:h,modules:{app:b}}),y=n("a21f"),w=function(){var e=this,t=e._self._c;return t("div",{staticClass:"layout"},[t("router-view",{staticClass:"layout-content",attrs:{id:"main"}})],1)},k=[],C={name:"layout",components:{},data(){return{showPrice:!0,dialogVisible:!1,isCollapse:!0}},watch:{isShowConnect(){this.dialogVisible=this.$store.state.app.isShowConnect}},computed:{isShowConnect(){return this.$store.state.app.isShowConnect},classObj(){return{}}},created(){"/cityNodeToken"==this.$route.path||"/home"==this.$route.path?this.showPrice=!1:this.showPrice=!0},methods:{chooseChain(e){this.isShowSelect=!1,this.curChain=e},onClose(){this.$store.commit("app/SET_SHOWCONNECT")},async registerWeb3(){},async getWallet(){"undefined"==typeof window.ethereum&&this.$message.error("down metamask"),window.ethereum.request({method:"eth_requestAccounts"}),this.registerWeb3()}}},T=C,S=(n("14c0"),Object(c["a"])(T,w,k,!1,null,null,null)),D=S.exports;o["default"].use(y["a"]);const A=[{path:"/",component:D,redirect:"/",children:[{path:"/",name:"home",component:()=>Promise.all([n.e("chunk-3e9609ae"),n.e("chunk-d7adef2a")]).then(n.bind(null,"bb51"))},{path:"/fund",name:"fund",component:()=>Promise.all([n.e("chunk-3e9609ae"),n.e("chunk-4e478620")]).then(n.bind(null,"c209"))},{path:"/JoinUs",name:"JoinUs",component:()=>Promise.all([n.e("chunk-3e9609ae"),n.e("chunk-bc603364")]).then(n.bind(null,"6230"))},{path:"/csr",name:"csr",component:()=>Promise.all([n.e("chunk-3e9609ae"),n.e("chunk-03596683")]).then(n.bind(null,"c165"))},{path:"/blog",name:"blog",component:()=>Promise.all([n.e("chunk-3e9609ae"),n.e("chunk-aa327e00")]).then(n.bind(null,"fd3f"))},{path:"/history",name:"history",component:()=>Promise.all([n.e("chunk-3e9609ae"),n.e("chunk-2d2259e5")]).then(n.bind(null,"e4bb"))}]}],z=new y["a"]({mode:"hash",routes:A});var F=z,L=n("f14f"),P=n("48b1"),U=n.n(P),E={documentation:"Dokumentation",livechat:"Live-Chat",page2info1:"Teilnehmer-Lernplattform",page2info2:"Plattform, auf der Sie erfahrenen Teilnehmern eine Frage stellen können",page2info1bottom:"Beginne zu lernen",page2info2bottom:"Finde einen Mentor",page3title:"Partnerergebnisse",page3content1:"Alle Daten sind in der Blockchain gemeinfrei gespeichert und verifizierbar!",contractAddress:"Vertragsadresse","Accounts count":"Konten zählen","Total result":"Gesamtergebnis",Autonomy:"Autonomie","Unchanging conditions":"Unveränderliche Bedingungen",Transparency:"Transparenz","Full automation":"Vollständige Automatisierung",Decentralization:"Dezentralisierung","100% online":"100% online",page4listContent2:"Der Algorithmus wird auf der Blockchain gespeichert, sodass niemand, nicht einmal die Urheber der Idee, Ihre Transaktionen eingreifen, stornieren oder ändern kann.",page4listContent3:"Der Smart-Contract-Code wird gemeinfrei gespeichert, und jeder kann jederzeit den gesamten Transaktionsverlauf einsehen. Das sorgt für faire Konditionen und verlässliche Statistiken, auf die Sie sich verlassen können.",page4listContent6:"Es gibt keine versteckten Kosten oder Servicegebühren. Der Saldo des Smart Contracts ist immer Null.",page5title:"Bequemes Büro"},_={documentation:"Documentation",page1info1:"Learning",page1info2part1:"Join ",page1info2part2:" Yunus Loop DeFi and make money",page1info2part3:" by helping people in developing countries.",page2content1:"Through blockchain technology-based DeFi, capital is allowed to ",page2content2:"flow around the world",page2content3:", allowing people   ",page2content4:"in developing countries",page2content5:"to borrow money and access development opportunities at at a lower cost, while",page2content6:"allowing investors to profit.",livechat:"Live chat",page2info1:"Participant learning platform",page2info2:"Platform where you can ask a question to experienced participants",page2info1bottom:"Start learning",page2info2bottom:"Find a mentor",page3title:"Partner results",page3content1:"All data is stored in the blockchain in the public domain and can be verified!",CirculationAddress:"Circulation Address ","Accounts count":"Accounts count","Total result":"Total result",page4title:"The New Opportunities Blockchain and Smart Contracts Bring to the World",page4content1:"DeFi, brought about by decentralized blockchain and open and transparent smart contracts, is a revolutionary technological change for finance, which achieves decentralized, open and transparent finance, and efficient operation, while having security far beyond that of traditional finance.",Autonomy:"Autonomy","Unchanging conditions":"Unchanging conditions",Transparency:"Transparency","Full automation":"Full automation",Decentralization:"Decentralization","100% online":"100% online",page4listContent1:"The Yunus Loop DeFi system runs on the blockchain by means of smart contracts, which are fully autonomous and exclude human influence.",page4listContent2:"The algorithm is stored on the blockchain, so no one, even the authors of the idea, can intervene, cancel or change your transactions.",page4listContent3:"Smart contracts run on the blockchain and transaction records are stored on the blockchain so that anyone can view them at any time. this ensures fair conditions and reliable statistics that you can rely on.",page4listContent4:"Yunus Loop DeFi does not store your assets, all assets are stored entirely on the blockchain and assets are automatically moved between participant accounts.",page4listContent5:"No one, not even the creators of the code, can make changes to the work of Yunus Loop DeFi smart contracts.",page4listContent6:"There are no hidden costs or service fees. The smart contract balance is always zero.",page5title:"Convenient office",page5content:"Participate and know the investment information at any time through any blockchain wallet.",page6title:"Frequently asked Questions",page6listTitle1:"What is Yunus Loop DeFi?",page6listTitle2:"How is Yunus Loop DeFi profitable?",page6listTitle3:"Is Yunus Loop DeFi secure?",page6listTitle4:"How I can participate in making money?",page6listTitle5:"How to make money by helping others？",page6listTitle6:"How can I borrow money through Yunus Loop DeFi?",page6listTitle7:"How to payback?",page6listContent1:"The Yunus Loop DeFi team pays tribute to Mr. Muhammad Yunus and aspires to do the same all over the world through blockchain technology. Yunus Loop DeFi aims to reduce the cost and risk of trust and enable people in every corner of the world to borrow money and access development opportunities at low cost.",page6listContent2part1:"Yunus Loop DeFi makes money by taking advantage of the interest rate difference between different countries. The annual interest rate for loans in France is 1.8%, in Germany 2.6%, but in developing countries the interest rate is very high, 19% in Colombia, 30% in Brazil and even more than 36% in China for private lending.",page6listContent2part2:"Yunus Loop DeFi makes money through short-term and ultra-short-term lending, for example, in China, bridging capital loans can reach 2% interest per day",page6listContent3part1:"Yunus Loop DeFi runs on the blockchain, with open source code, 100% transparent, 100% secure, and 100% efficient.",page6listContent3part2:"Security Audit",page6listContent4part1:'Download blockchain wallets, such as Trust Wallet,  Tronlink, click "Discover", enter ',page6listContent4part2:"in your browser, enter the dapp and start earning money.",page6listContent5part1:"In the Yunus Loop Defi Lending Smart Contract, each participant can become a project initiator, invite new users to join, and receive a sharing bonus.",page6listContent5part2:"For every additional 100 USDT circulated by the user himself, he will receive one more generation of sharing bonus.",page6listContent5part3:"The maximum share bonus is 21 levels.\n",page6listContent5part4:"For 100 USDT, you will receive 20% of the proceeds of each circulation of 1 generation of friends",page6listContent5part5:"When circulating 200 USDT, you will receive 10% of the proceeds of each circulation of 2 generations of friends",page6listContent5part6:"For 300USDT-700USDT, you will receive 5% of the proceeds of each circulation from 3 to 7 generations of friends.",page6listContent5part7:"For 800USDT-1000USDT, you will receive 3% of the proceeds of each circulation from 8 to 10 generations of friends.",page6listContent5part8:"For 1100USDT-2100USDT, you will receive 1% of each circulation from 11 to 21 generations of friends",page6listContent5part9:"Each share reward will be automatically credited to the originator's wallet address via smart contract",page6listContent6:"Go to the Yunus Loop DeFi dapp in your blockchain wallet (e.g. Trust Wallet), enter the amount of USDT you want to borrow, and the system will automatically calculate the amount of tokens you need to pledge. After you click submit to borrow, the smart contract will be executed automatically and USDT will be credited to your wallet address.",page6listContent7:"Borrowers are required to repay the loan as promised, otherwise the system will initiate liquidation.",bottomInfo:"The world's first 100% decentralized matrix platform"},q={documentation:"Documentation",livechat:"Chat en direct",page2info1:"Plateforme d'apprentissage des participants",page2info2:"Plateforme où vous pouvez poser une question aux participants expérimentés",page2info1bottom:"Commencer à apprendre",page2info2bottom:"Trouver un mentor",page3title:"Résultats partenaires",page3content1:"Toutes les données sont stockées dans la blockchain dans le domaine public et peuvent être",contractAddress:"Vertragsadresse","Accounts count":"Konten zählen","Total result":"Résultat total",Autonomy:"Autonomie","Unchanging conditions":"Conditions immuables",Transparency:"Transparence","Full automation":"Automatisation complète",Decentralization:"Décentralisation","100% online":"100% en ligne",page4listContent2:"L'algorithme est stocké sur la blockchain, donc personne, même les auteurs de l'idée, ne peut intervenir, annuler ou modifier vos transactions.",page4listContent3:"Le code de contrat intelligent est stocké dans le domaine public et n'importe qui peut consulter l'historique complet des transactions à tout moment. Cela garantit des conditions équitables et des statistiques fiables sur lesquelles vous pouvez compter.",page4listContent6:"Il n'y a pas de coûts cachés ni de frais de service. Le solde du contrat intelligent est toujours égal à zéro.",page5title:"Bureau pratique"},B={documentation:"Documentazione",livechat:"Chat dal vivo",page2info1:"Piattaforma di apprendimento dei partecipanti",page2info2:"Piattaforma in cui puoi porre una domanda a partecipanti esperti",page2info1bottom:"flex items-center text-white",page2info2bottom:"Trova un mentore",page3title:"Risultati partner",page3content1:"Tutti i dati sono archiviati nella blockchain di pubblico dominio e possono essere verificati!",contractAddress:"Indirizzo del contratto ","Total result":"Risultato totale",Autonomy:"Autonomia","Unchanging conditions":"Condizioni immutabili",Transparency:"Trasparenza","Full automation":"Automazione completa",Decentralization:"Decentramento","100% online":"100% in linea",page4listContent2:"L'algoritmo è memorizzato sulla blockchain, quindi nessuno, nemmeno gli autori dell'idea, può intervenire, annullare o modificare le tue transazioni.",page4listContent3:"Il codice dello smart contract è archiviato nel pubblico dominio e chiunque può visualizzare l'intera cronologia delle transazioni in qualsiasi momento. Ciò garantisce condizioni eque e statistiche affidabili su cui puoi fare affidamento.",page4listContent6:"Non ci sono costi nascosti o costi di servizio. Il saldo dello smart contract è sempre zero.",page5title:"Ufficio comodo"};o["default"].use(L["a"]);let O=new L["a"]({locale:localStorage.getItem("language")||"en",messages:{de:{...E},en:{..._},fr:{...q},it:{...B}}});U.a.i18n((e,t)=>O.t(e,t));var j=O;o["default"].config.productionTip=!1,new o["default"]({router:F,store:v,i18n:j,render:e=>e(u)}).$mount("#app")},"5ce4":function(e,t,n){},"6f88":function(e,t,n){},d105:function(e,t,n){"use strict";n("5ce4")}});
//# sourceMappingURL=app.c3617323.js.map