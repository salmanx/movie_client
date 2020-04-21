(this.webpackJsonpmovie_client=this.webpackJsonpmovie_client||[]).push([[0],{141:function(e,t,a){e.exports=a(180)},171:function(e,t,a){},173:function(e,t,a){},180:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),i=a.n(o),l=a(39);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(151);var c=a(115),s=a(37),u=a(116),m=a(44),p={MAIN:"GET_MOVIES_MAIN",SUCCESS:"GET_MOVIES_SUCCESS",FAILURE:"GET_MOVIE_FAILURE"},d={MAIN:"MOVIES_SEARCH_MAIN",SUCCESS:"MOVIES_SEARCH_SUCCESS",FAILURE:"MOVIE_SEARCH_FAILURE"},h="SELECTED_CATEGORY",g="SELECTED_RATING";function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b={movies:[],selectedCategory:{},setSelectedRating:null,loading:null};var E=Object(s.combineReducers)({movieReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.MAIN:return f({},e,{movies:e.movies,loading:!0});case p.SUCCESS:return f({},e,{loading:!1,movies:t.result});case p.FAILURE:return f({},e,{loading:null,movies:[]});case d.MAIN:return f({},e,{movies:e.movies,loading:!0});case d.SUCCESS:return f({},e,{loading:!1,movies:t.result});case d.FAILURE:return f({},e,{loading:null,movies:[]});case h:return f({},e,{selectedCategory:t.body});case g:return f({},e,{setSelectedRating:t.body});default:return e}}}),y=a(29),C=a.n(y),O=a(36),k=a(104),j=a(21),S=a.n(j),w="https://evening-shore-61360.herokuapp.com/api";function x(){return(x=Object(k.a)(C.a.mark((function e(t,a,n){var r,o,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=void 0,r={serverUrl:"".concat(w,"/"),requestHeader:{"Content-Type":n?"multipart/form-data":"application/json","Accept-Language":"en-AU"}},o=r.serverUrl,i=r.requestHeader,e.abrupt("return",S.a.get(o+t,{params:a,headers:i}));case 2:case"end":return e.stop()}var n}),e)})))).apply(this,arguments)}var M={get:function(e,t,a){return x.apply(this,arguments)}},N={MOVIES_API:"movies",MOVIES_SEARCH_API:"movies/search"},R=C.a.mark(T),I=C.a.mark(F),A=C.a.mark(B);function T(e){var t;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(O.b)(M.get,N.MOVIES_API,e.body,!0);case 3:return t=a.sent,a.next=6,Object(O.c)({type:p.SUCCESS,result:t.data});case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,Object(O.c)({type:p.FAILURE,error:"something went wrong"});case 12:case"end":return a.stop()}}),R,null,[[0,8]])}function F(e){var t;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(O.b)(M.get,N.MOVIES_SEARCH_API,e.body,!0);case 3:return t=a.sent,a.next=6,Object(O.c)({type:d.SUCCESS,result:t.data});case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,Object(O.c)({type:d.FAILURE,error:"something went wrong"});case 12:case"end":return a.stop()}}),I,null,[[0,8]])}function B(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.d)(p.MAIN,T);case 2:return e.next=4,Object(O.d)(d.MAIN,F);case 4:case"end":return e.stop()}}),A)}var _=C.a.mark(L);function L(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)([B()]);case 2:case"end":return e.stop()}}),_)}var D,P=L,W=a(105),U=a.n(W),z=Object(u.a)(),q=Object(s.createStore)(E,(D=[z],(0,a(170).composeWithDevTools)(s.applyMiddleware.apply(void 0,Object(c.a)(D).concat([U.a])))));z.run(P);var V=q,G=(a(171),a(10)),H=a(14),Y=a(16),J=a(15),K=a(17),$=a(27),Q=a(43),X=(a(172),a(173),a(81),a(60)),Z=a(215),ee=a(216),te=a(217),ae=a(76),ne=a(121),re=a(240),oe=a(114),ie=a(108),le=a.n(ie),ce=a(109),se=a.n(ce),ue=a(110),me=a.n(ue),pe=a(211),de=a(24),he=a(74),ge=a.n(he),ve=function e(){var t=this;Object(G.a)(this,e),this.loggedIn=function(){var e=t.gettoken();return!!e&&!t.istokenExpired(e)},this.istokenExpired=function(e){try{return ge()(e).exp>(new Date).getTime()+3600}catch(t){return console.log("expired check failed!"),!1}},this.settoken=function(e){localStorage.setItem("token",e)},this.gettoken=function(){return localStorage.getItem("token")},this.logout=function(){localStorage.clear(),window.location.href="/"},this.getConfirm=function(){return ge()(t.gettoken())},this.currentUser=function(){return ge()(t.gettoken())}};function fe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:p.MAIN,body:e}}function be(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:h,body:e}}function Ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:g,body:e}}var ye=Object(pe.a)((function(e){return{grow:{flexGrow:1},title:Object(m.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(m.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(de.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(de.c)(e.palette.common.white,.25)},marginRight:0,marginLeft:e.spacing(3),width:"70%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(9),width:"70%"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(m.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"100%"}),sectionDesktop:Object(m.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(m.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),link:{marginRight:"15px",marginTop:"10px",border:"1px solid #fff",height:"30px",color:"#fff",textTransform:"uppercase",lineHeight:"14px",borderRadius:"5px",fontSize:"15px",fontWeight:"normal",padding:e.spacing(1),"&:hover":{color:"#fff",textDecoration:"none"}},menuLink:{backgroundColor:"none",color:"#000","&:hover":{color:"#000",backgroundColor:"none",textDecoration:"none"}},menuLinkBrand:{backgroundColor:"none",color:"#fff","&:hover":{color:"#fff",backgroundColor:"none",textDecoration:"none"},cursor:"pointer"}}}));var Ce=Object(l.b)(null,(function(e){return{getMoviesBySearch:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:d.MAIN,body:e}}(t))},getAllMovies:function(t){return e(fe(t))},setSelectedCategory:function(t){return e(be(t))},setSelectedRating:function(t){return e(Ee(t))}}}))((function(e){var t=ye(),a=r.a.useState(null),n=Object(X.a)(a,2),o=n[0],i=n[1],l=r.a.useState(null),c=Object(X.a)(l,2),s=c[0],u=c[1],m=Boolean(o),p=Boolean(s),d=new ve,h=function(e){i(e.currentTarget)},g=function(){u(null)},v=function(){i(null),g()},f="primary-search-account-menu",b=r.a.createElement(oe.a,{anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},id:f,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:m,onClose:v},r.a.createElement(re.a,{onClick:v},d.loggedIn()&&r.a.createElement($.b,{to:"/admin/movies",className:t.menuLink},"Your Movies")),r.a.createElement(re.a,{onClick:v},d.loggedIn()&&r.a.createElement($.b,{to:"/movies/new",className:t.menuLink},"Create Movie")),r.a.createElement(re.a,{onClick:function(){return d.logout()}},"Signout")),E=r.a.createElement(oe.a,{anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:p,onClose:g},d.loggedIn()&&r.a.createElement("div",null,r.a.createElement(re.a,{onClick:v},r.a.createElement($.b,{to:"/admin/movies",className:t.menuLink},"Your Movies")),r.a.createElement(re.a,{onClick:v},r.a.createElement($.b,{to:"/movies/new",className:t.menuLink},"Create Movie")),r.a.createElement(re.a,{onClick:h},r.a.createElement("p",{onClick:function(){return d.logout()}},"Signout"))),!d.loggedIn()&&r.a.createElement(re.a,null,r.a.createElement($.b,{to:"/signin"},"Sign in")));return r.a.createElement("div",{className:t.grow},r.a.createElement(Z.a,{position:"static"},r.a.createElement(ee.a,null,r.a.createElement("div",{className:t.menuLinkBrand,role:"button",onClick:function(){return e.setSelectedCategory({}),e.setSelectedRating(null),e.getAllMovies(),r.a.createElement(Q.a,{to:"/"})}},r.a.createElement(ae.a,{className:t.title,variant:"h6",noWrap:!0},"FMovie")),r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(le.a,null)),r.a.createElement(ne.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"},onKeyDown:function(t){!function(t){13===t.keyCode&&(t.target.value?(e.getMoviesBySearch({query:t.target.value}),t.target.value=""):e.getMoviesBySearch())}(t)}})),r.a.createElement("div",{className:t.grow}),r.a.createElement("div",{className:t.sectionDesktop},d.loggedIn()&&r.a.createElement(te.a,{edge:"end","aria-label":"account of current user","aria-controls":f,"aria-haspopup":"true",onClick:h,color:"inherit",className:"mr-5"},r.a.createElement(se.a,null)),!d.loggedIn()&&r.a.createElement($.b,{to:"/signin",className:t.link},"Sign in")),r.a.createElement("div",{className:t.sectionMobile},r.a.createElement(te.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},color:"inherit"},r.a.createElement(me.a,null))))),E,b)})),Oe=Object(pe.a)((function(e){return{footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}}));function ke(){return r.a.createElement(ae.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement($.b,{color:"inherit",to:"/"},"Fmovies")," ",(new Date).getFullYear(),".")}function je(){var e=Oe();return r.a.createElement("footer",{className:e.footer},r.a.createElement(ae.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"You can browse and rate your favourite movie"),r.a.createElement(ke,null))}var Se=a(71),we=a(72);function xe(){var e=Object(Se.a)(['\n  .default-page-content {\n    h2 {\n      text-transform: uppercase;\n      color: #6610f2;\n      font-family: "Lato", sans-serif;\n      padding: 20px 0px;\n      font-weight: bold;\n      letter-spacing: 2px;\n      line-height: 50px;\n    }\n  }\n']);return xe=function(){return e},e}var Me=function(e){function t(){return Object(G.a)(this,t),Object(Y.a)(this,Object(J.a)(t).apply(this,arguments))}return Object(K.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){return r.a.createElement(Ne,null,r.a.createElement("div",{className:"py-5",style:{background:"#f8f9fa"}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-md-8 default-page-content"},r.a.createElement("h2",null,r.a.createElement("strong",null,"OPS!!")," The page or movie you are looking for is not found."),r.a.createElement("p",null)))))}}]),t}(n.Component),Ne=we.a.div(xe()),Re=Me,Ie=a(20),Ae=a(218),Te=a(35),Fe=a.n(Te),Be=a(5),_e=function(e){function t(e){var a;return Object(G.a)(this,t),(a=Object(Y.a)(this,Object(J.a)(t).call(this,e))).state={anchorCatEl:null,anchorEl:null,categories:[],selectedCategory:{},setSelectedRating:null},a.handleCategoryMenuClick=a.handleCategoryMenuClick.bind(Object(Ie.a)(a)),a.handleCategoryMenuClose=a.handleCategoryMenuClose.bind(Object(Ie.a)(a)),a.handleCategoryMenuItemClick=a.handleCategoryMenuItemClick.bind(Object(Ie.a)(a)),a.handleRatingFilterClick=a.handleRatingFilterClick.bind(Object(Ie.a)(a)),a.handleRatingFilterClose=a.handleRatingFilterClose.bind(Object(Ie.a)(a)),a}return Object(K.a)(t,e),Object(H.a)(t,[{key:"handleCategoryMenuClick",value:function(e){this.setState({anchorCatEl:e.currentTarget})}},{key:"handleCategoryMenuClose",value:function(){this.setState({anchorCatEl:null})}},{key:"handleCategoryMenuItemClick",value:function(){this.setState({anchorCatEl:null})}},{key:"handleRatingFilterClick",value:function(e){this.setState({anchorEl:e.currentTarget})}},{key:"handleRatingFilterClose",value:function(e){this.setState({anchorEl:null})}},{key:"filterMoviesByCategory",value:function(e){e?(this.props.getAllMovies({category:e.id,rating:this.props.movies.setSelectedRating}),this.setState({selectedCategory:e}),this.props.setSelectedCategory(e)):(this.props.getAllMovies({rating:this.props.movies.setSelectedRating}),this.setState({selectedCategory:{}}),this.props.setSelectedCategory({}))}},{key:"filterMoviesByRating",value:function(e){e?(this.props.getAllMovies({rating:e,category:this.props.movies.selectedCategory.id}),this.setState({setSelectedRating:e}),this.props.setSelectedRating(e)):(this.props.getAllMovies({category:this.props.movies.selectedCategory.id}),this.setState({setSelectedRating:null}),this.props.setSelectedRating(null))}},{key:"componentDidMount",value:function(){var e=this;S.a.get("".concat(w,"/categories")).then((function(t){e.setState({categories:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.root},this.state.categories&&r.a.createElement("div",{className:t.filter},r.a.createElement(Ae.a,{"aria-controls":"simple-menu","aria-haspopup":"true",color:"primary",className:"classes.btn",onClick:this.handleCategoryMenuClick},Object.keys(this.props.movies.selectedCategory).length?this.props.movies.selectedCategory.name:"Category"),r.a.createElement(oe.a,{id:"simple-menu",anchorEl:this.state.anchorCatEl,keepMounted:!0,open:Boolean(this.state.anchorCatEl),onClose:this.handleCategoryMenuClose},r.a.createElement(re.a,{onClick:function(t){e.handleCategoryMenuClose(),e.filterMoviesByCategory(null)}},"All"),this.state.categories.map((function(t,a){return r.a.createElement(re.a,{onClick:function(){e.handleCategoryMenuItemClick(),e.filterMoviesByCategory(t)},key:t.id,value:t.id,name:"category"},t.name)})))),r.a.createElement("div",{className:t.filter},r.a.createElement(Ae.a,{"aria-controls":"simple-menu","aria-haspopup":"true",color:"primary",className:"classes.btn",onClick:this.handleRatingFilterClick},this.props.movies.setSelectedRating?r.a.createElement(Fe.a,{total:5,rating:this.props.movies.setSelectedRating,interactive:!1}):"Rating"),r.a.createElement(oe.a,{id:"simple-menu",anchorEl:this.state.anchorEl,keepMounted:!0,open:Boolean(this.state.anchorEl),onClose:this.handleRatingFilterClose},r.a.createElement(re.a,{onClick:function(){e.handleRatingFilterClose(),e.filterMoviesByRating(null)}},"All"),r.a.createElement(re.a,{onClick:function(){e.handleRatingFilterClose(),e.filterMoviesByRating(5)}},r.a.createElement(Fe.a,{total:5,rating:5,interactive:!1})),r.a.createElement(re.a,{onClick:function(){e.handleRatingFilterClose(),e.filterMoviesByRating(4)}},r.a.createElement(Fe.a,{total:5,rating:4,interactive:!1})),r.a.createElement(re.a,{onClick:function(){e.handleRatingFilterClose(),e.filterMoviesByRating(3)}},r.a.createElement(Fe.a,{total:5,rating:3,interactive:!1})),r.a.createElement(re.a,{onClick:function(){e.handleRatingFilterClose(),e.filterMoviesByRating(2)}},r.a.createElement(Fe.a,{total:5,rating:2,interactive:!1})),r.a.createElement(re.a,{onClick:function(){e.handleRatingFilterClose(),e.filterMoviesByRating(1)}},r.a.createElement(Fe.a,{total:5,rating:1,interactive:!1})))))}}]),t}(r.a.Component);var Le=Object(l.b)((function(e){return{movies:e.movieReducer}}),(function(e){return{getAllMovies:function(t){return e(fe(t))},setSelectedCategory:function(t){return e(be(t))},setSelectedRating:function(t){return e(Ee(t))}}}))(Object(Be.a)((function(e){return{root:{display:"flex",backgroundColor:"#ddd",padding:"20px",justifyContent:"center",marginBottom:"30px",paddingBottom:"30px",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}},btn:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(_e)),De=a(224),Pe=a(225),We=a(226),Ue=a(235),ze=a(232);function qe(e){return r.a.createElement(ze.a,Object.assign({elevation:6,variant:"filled"},e))}var Ve=function(e){function t(e){var a;return Object(G.a)(this,t),(a=Object(Y.a)(this,Object(J.a)(t).call(this,e))).handleOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState((function(e){return{open:!e.open}}))},a.state={open:!1},a}return Object(K.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(Ue.a,{open:this.state.open,autoHideDuration:4e3,onClose:this.handleClose},"requiredAuth"===this.props.flashType?r.a.createElement(qe,{onClose:this.handleClose,severity:"warning"},"You have to signin first"):r.a.createElement(qe,{onClose:this.handleClose,severity:"success"},"You have successfully rated the movie!")))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.open?{open:e.open}:null}}]),t}(r.a.Component),Ge=Object(Be.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}))(Ve),He=a(219),Ye=a(220),Je=a(236),Ke=a(221),$e=a(222),Qe=a(223),Xe=a(75),Ze=function(e){function t(e){var a;return Object(G.a)(this,t),(a=Object(Y.a)(this,Object(J.a)(t).call(this,e))).auth=new ve,a.handleRating=function(e,t){if(a.auth.loggedIn()){var n={Accept:"application/json","Content-Type":"application/json"};a.auth.loggedIn()&&(n.Authorization=a.auth.gettoken()),S.a.post("".concat(w,"/rating"),{rating:{movie_id:t,rating:e.rating}},{headers:n}).then((function(e){a.props.showSneakbar(),a.props.rate()})).catch((function(e){console.log(e)}))}else a.props.showSneakbar("requiredAuth")},a.handleRating=a.handleRating.bind(Object(Ie.a)(a)),a}return Object(K.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.props.movie;return r.a.createElement(He.a,{className:t.root},r.a.createElement(Ye.a,{avatar:r.a.createElement(Je.a,{"aria-label":"recipe",className:t.avatar},a.category.name),title:a.title,subheader:a.created_at}),r.a.createElement(Ke.a,{className:t.media,image:"https://placehold.it/300x300.png",title:"Paella dish"}),r.a.createElement($e.a,null,r.a.createElement(ae.a,{variant:"body2",color:"textSecondary",component:"p"},a.text)),r.a.createElement(Qe.a,{disableSpacing:!0},r.a.createElement(Fe.a,{total:5,rating:a.rating,onRate:function(t){e.handleRating(t,a.id)}})))}}]),t}(r.a.Component),et=Object(Be.a)((function(e){return{root:{maxWidth:280,margin:"10px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:Xe.a[500],fontSize:"8px",wordBreak:"break-all",textAlign:"center"}}}))(Ze),tt=a(231),at=Object(pe.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));var nt=Object(l.b)((function(e){return{movies:e.movieReducer}}),(function(e){return{getAllMovies:function(t){return e(fe(t))}}}))((function(e){var t=at(),a=r.a.useState(1),n=Object(X.a)(a,2),o=(n[0],n[1]);return r.a.createElement("div",{className:t.root},r.a.createElement(tt.a,{count:e.total_pages,color:"primary",onChange:function(t,a){o(a),e.getAllMovies({page:a,category:e.movies.selectedCategory.id,rating:e.movies.setSelectedRating})}}))})),rt=function(e){function t(e){var a;return Object(G.a)(this,t),(a=Object(Y.a)(this,Object(J.a)(t).call(this,e))).handleFlashMessage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";a.setState({snackBarOpen:!0,flashType:e},(function(){return a.setState({snackBarOpen:!1})}))},a.handleRating=function(){var e=a.props.movies.selectedCategory.id,t=a.props.movies.movies.current_page;a.props.getAllMovies({category:e,page:t})},a.state={snackBarOpen:!1,flashType:void 0},a}return Object(K.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){this.props.getAllMovies()}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.props.movies;return r.a.createElement(De.a,{className:t.cardGrid,maxWidth:"md"},r.a.createElement(Ge,{open:this.state.snackBarOpen,flashType:this.state.flashType}),r.a.createElement(Pe.a,{container:!0,spacing:4},a.loading?r.a.createElement(Pe.a,{container:!0,justify:"center"},r.a.createElement("div",{className:t.circularProgress},r.a.createElement(We.a,{color:"primary"}))):a.movies.entries.length>0?a.movies.entries.map((function(t){return r.a.createElement(et,{key:t.id,movie:t,showSneakbar:e.handleFlashMessage,rate:e.handleRating})})):r.a.createElement(Pe.a,{container:!0,justify:"center"},r.a.createElement("h2",null,"No Movies found")),a.movies.total_entries>9&&r.a.createElement(Pe.a,{container:!0,justify:"center"},r.a.createElement(nt,{total_pages:a.movies.total_pages}))))}}]),t}(r.a.Component);var ot=Object(l.b)((function(e){return{movies:e.movieReducer}}),(function(e){return{getAllMovies:function(t){return e(fe(t))}}}))(Object(Be.a)((function(e){return{card:{backgroundColor:"#FAF7F2"},media:{height:0,paddingTop:"56.25%"},circularProgress:{display:"flex","& > * + *":{marginLeft:e.spacing(2)},align:"center"}}}))(rt));function it(){var e=Object(Se.a)([""]);return it=function(){return e},e}var lt=function(e){function t(){return Object(G.a)(this,t),Object(Y.a)(this,Object(J.a)(t).apply(this,arguments))}return Object(K.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){return r.a.createElement(ct,null,r.a.createElement("div",null,r.a.createElement(Le,null),r.a.createElement(ot,null)))}}]),t}(n.Component),ct=we.a.div(it()),st=a(227),ut=a(238),mt=function(e){function t(e){var a;return Object(G.a)(this,t),(a=Object(Y.a)(this,Object(J.a)(t).call(this,e))).handleLogin=a.handleLogin.bind(Object(Ie.a)(a)),a.state={email:"",password:"",error:""},a}return Object(K.a)(t,e),Object(H.a)(t,[{key:"handleLogin",value:function(e){var t=this;if(e.preventDefault(),e.target.elements.email.value&&e.target.elements.password.value){var a=e.target.elements.email.value,n=e.target.elements.password.value;S.a.post("".concat(w,"/sign_in"),{email:a,password:n}).then((function(e){console.log(e),localStorage.setItem("token",e.data.token),window.location.href="/"})).catch((function(e){console.log(e.response),t.setState({error:e.response.data.errors})}))}else this.setState({error:"Please provide your valid credentials"})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(De.a,{component:"main",maxWidth:"xs"},r.a.createElement(st.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(ae.a,{component:"h1",variant:"h5"},"Sign in"),this.state.error&&r.a.createElement("p",{className:"alert alert-danger"},this.state.error),r.a.createElement("form",{className:e.form,noValidate:!0,onSubmit:this.handleLogin},r.a.createElement(ut.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"}),r.a.createElement(ut.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(Ae.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign In"),r.a.createElement(Pe.a,{container:!0},r.a.createElement(Pe.a,{item:!0},r.a.createElement($.b,{to:"signup",variant:"body2"},"Don't have an account? Sign Up")))))))}}]),t}(r.a.Component),pt=Object(Be.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}))(mt),dt=function(e){function t(e){var a;return Object(G.a)(this,t),(a=Object(Y.a)(this,Object(J.a)(t).call(this,e))).auth=new ve,a.handleRegister=a.handleRegister.bind(Object(Ie.a)(a)),a.state={email:"",password:"",firstName:"",lastName:"",error:""},a}return Object(K.a)(t,e),Object(H.a)(t,[{key:"handleRegister",value:function(e){var t=this;if(e.preventDefault(),e.target.elements.firstName.value)if(e.target.elements.lastName.value)if(e.target.elements.email.value)if(e.target.elements.password.value){var a=e.target.elements.email.value,n=e.target.elements.password.value,r=e.target.elements.firstName.value,o=e.target.elements.lastName.value;S.a.post("".concat(w,"/sign_up"),{user:{first_name:r,last_name:o,email:a,password:n}}).then((function(e){localStorage.setItem("token",e.data.token),t.props.history.push("/")})).catch((function(e){console.log(e.response),t.setState((function(){return{error:e.response.data.errors}}))}))}else this.setState({error:"Please provide your valid password"});else this.setState({error:"Please provide your valid email"});else this.setState({error:"Please provide your last email"});else this.setState({error:"Please provide your first name"})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(De.a,{component:"main",maxWidth:"xs"},r.a.createElement(st.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(ae.a,{component:"h1",variant:"h5"},"Sign up"),this.state.error&&r.a.createElement("p",{className:"alert alert-danger"},this.state.error),r.a.createElement("form",{className:e.form,noValidate:!0,onSubmit:this.handleRegister},r.a.createElement(Pe.a,{container:!0,spacing:2},r.a.createElement(Pe.a,{item:!0,xs:12,sm:6},r.a.createElement(ut.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name"})),r.a.createElement(Pe.a,{item:!0,xs:12,sm:6},r.a.createElement(ut.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})),r.a.createElement(Pe.a,{item:!0,xs:12},r.a.createElement(ut.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})),r.a.createElement(Pe.a,{item:!0,xs:12},r.a.createElement(ut.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}))),r.a.createElement(Ae.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign Up"),r.a.createElement(Pe.a,{container:!0,justify:"flex-end"},r.a.createElement(Pe.a,{item:!0},r.a.createElement($.b,{to:"signin",variant:"body2"},"Already have an account? Sign in"))))))}}]),t}(r.a.Component),ht=Object(Be.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}))(dt),gt=a(237),vt=a(230),ft=a(233);function bt(e){var t=new ve;return function(a){function n(){var e,t;Object(G.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(Y.a)(this,(e=Object(J.a)(n)).call.apply(e,[this].concat(r)))).state={confirm:null,loaded:!1},t}return Object(K.a)(n,a),Object(H.a)(n,[{key:"componentWillMount",value:function(){if(t.loggedIn())try{var e=t.getConfirm();this.setState({confirm:e,loaded:!0})}catch(a){t.logout(),this.props.history.replace("/login")}else this.props.history.replace("/signin")}},{key:"render",value:function(){return!0===this.state.loaded&&this.state.confirm?r.a.createElement(e,{history:this.props.history,confirm:this.state.confirm}):null}}]),n}(n.Component)}var Et=function(e){function t(e){var a;return Object(G.a)(this,t),(a=Object(Y.a)(this,Object(J.a)(t).call(this,e))).auth=new ve,a.fetchAllCategories=function(){S.a.get("".concat(w,"/categories")).then((function(e){a.setState({categories:e.data})})).catch((function(e){return console.log(e)}))},a.handleChange=function(e){console.log(e.target.value),a.setState({category:e.target.value})},a.handleCreateMovie=a.handleCreateMovie.bind(Object(Ie.a)(a)),a.state={title:null,text:null,category:null,categories:[],user:{}},a}return Object(K.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.fetchAllCategories(),this.props.history.location.state){var t=this.props.history.location.state.id,a={Accept:"application/json","Content-Type":"application/json"};this.auth.loggedIn()&&(a.Authorization=this.auth.gettoken()),S.a.get("".concat(w,"/movies/").concat(t),{headers:a}).then((function(t){e.setState({title:t.data.title,text:t.data.text,category:t.data.category.id})})).catch((function(e){return console.log(e)}))}}},{key:"handleCreateMovie",value:function(e){var t=this;if(e.preventDefault(),this.state.category)if(e.target.elements.title.value)if(e.target.elements.text.value){var a=e.target.elements.title.value,n=e.target.elements.text.value,r={Accept:"application/json","Content-Type":"application/json"};this.auth.loggedIn()&&(r.Authorization=this.auth.gettoken()),S.a.post("".concat(w,"/movies"),{movie:{category_id:this.state.category,title:a,text:n}},{headers:r}).then((function(e){t.props.history.push("/admin/movies")})).catch((function(e){console.log(e)}))}else this.setState({error:"Please provide movie details"});else this.setState({error:"Please provide movie title"});else this.setState({error:"Please select a category"})}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(De.a,{component:"main",maxWidth:"xs"},r.a.createElement(st.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(ae.a,{component:"h1",variant:"h5"},"Create a movie here!"),this.state.error&&r.a.createElement("div",{className:t.error},r.a.createElement("p",{className:"alert alert-danger"},this.state.error)),r.a.createElement("form",{className:t.form,noValidate:!0,onSubmit:this.handleCreateMovie},r.a.createElement(vt.a,{className:t.formControl},r.a.createElement(gt.a,{id:"demo-simple-select-label"},"Select Category"),r.a.createElement(ft.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:this.state.category||"",onChange:this.handleChange},this.state.categories&&this.state.categories.map((function(e){return r.a.createElement(re.a,{value:e.id,key:e.id},e.name)})))),r.a.createElement(Pe.a,{container:!0,spacing:2},r.a.createElement(Pe.a,{item:!0,xs:12},r.a.createElement(ut.a,{variant:"outlined",required:!0,fullWidth:!0,id:"title",label:"Movie Name",value:this.state.title||"",onChange:function(t){return e.setState({title:t.target.value})}})),r.a.createElement(Pe.a,{item:!0,xs:12},r.a.createElement(ut.a,{variant:"outlined",required:!0,fullWidth:!0,id:"text",label:"Movie Details",autoComplete:"lname",value:this.state.text||"",onChange:function(t){return e.setState({text:t.target.value})}}))),r.a.createElement(Ae.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Create Movie"))))}}]),t}(r.a.Component),yt=bt(Object(Be.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},formControl:{margin:e.spacing(0,0,2,0),width:"100%"},selectEmpty:{marginTop:e.spacing(2)},error:{width:"100%",margin:e.spacing(2,0,-3,0)}}}))(Et)),Ct=function(e){function t(e){var a;return Object(G.a)(this,t),(a=Object(Y.a)(this,Object(J.a)(t).call(this,e))).auth=new ve,a.editMovie=function(e){a.props.history.push("/admin/movies/edit/".concat(e),{id:e})},a.deleteMovie=function(e){var t={Accept:"application/json","Content-Type":"application/json"};a.auth.loggedIn()&&(t.Authorization=a.auth.gettoken()),window.confirm("Do you really want to delete the movie?")&&S.a.delete("".concat(w,"/movies/").concat(e),{headers:t}).then((function(e){a.props.history.push("/admin/movies"),window.location.reload()})).catch((function(e){console.log(e)}))},a.deleteMovie=a.deleteMovie.bind(Object(Ie.a)(a)),a.editMovie=a.editMovie.bind(Object(Ie.a)(a)),a}return Object(K.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.props.movie;return r.a.createElement(He.a,{className:t.root},r.a.createElement(Ye.a,{avatar:r.a.createElement(Je.a,{"aria-label":"recipe",className:t.avatar},a.category.name),title:a.title,subheader:a.created_at}),r.a.createElement(Ke.a,{className:t.media,image:"https://avatars1.githubusercontent.com/u/3165635?s=460&v=4",title:"Paella dish"}),r.a.createElement($e.a,null,r.a.createElement(Ae.a,{variant:"contained",color:"primary",size:"small",className:t.actionBtn,onClick:function(){return e.editMovie(a.id)}},"Edit"),r.a.createElement(Ae.a,{variant:"contained",color:"secondary",size:"small",className:t.actionBtn,onClick:function(){return e.deleteMovie(a.id)}},"Delete")),r.a.createElement(Qe.a,{disableSpacing:!0},r.a.createElement(Fe.a,{total:5,rating:a.rating,interactive:!1})))}}]),t}(r.a.Component),Ot=Object(Be.a)((function(e){return{root:{width:280,margin:"10px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:Xe.a[500],fontSize:"8px",wordBreak:"break-all",textAlign:"center"},actionBtn:{margin:e.spacing(1)}}}))(Ct),kt=function(e){function t(e){var a;return Object(G.a)(this,t),(a=Object(Y.a)(this,Object(J.a)(t).call(this,e))).auth=new ve,a.handleFlashMessage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";a.setState({snackBarOpen:!0,flashType:e},(function(){return a.setState({snackBarOpen:!1})}))},a.state={movies:[],loading:null,snackBarOpen:!1,flashType:void 0},a}return Object(K.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0});var t={Accept:"application/json","Content-Type":"application/json"};this.auth.loggedIn()&&(t.Authorization=this.auth.gettoken()),S.a.get("".concat(w,"/users/movies"),{headers:t}).then((function(t){e.setState({movies:t.data,loading:!1})})).catch((function(e){return console.log(e)})),this.setState({loading:null})}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(De.a,{className:t.cardGrid,maxWidth:"md"},r.a.createElement(Pe.a,{container:!0,spacing:4},null===this.state.loading?r.a.createElement(Pe.a,{container:!0,justify:"center"},r.a.createElement("div",{className:t.circularProgress},r.a.createElement(We.a,{color:"primary"}))):this.state.movies.length>0?this.state.movies&&this.state.movies.map((function(t){return r.a.createElement(Ot,{key:t.id,movie:t,showSneakbar:e.handleFlashMessage,history:e.props.history})})):r.a.createElement(Pe.a,{container:!0,justify:"center"},r.a.createElement("h2",null,"No Movies found"))))}}]),t}(r.a.Component),jt=bt(Object(Be.a)((function(e){return{cardGrid:{marginTop:"20px",paddingTop:"40px"},card:{backgroundColor:"#7F2"},media:{height:0,paddingTop:"56.25%"},circularProgress:{display:"flex","& > * + *":{marginLeft:e.spacing(2)},align:"center"}}}))(kt)),St=function(e){function t(){return Object(G.a)(this,t),Object(Y.a)(this,Object(J.a)(t).apply(this,arguments))}return Object(K.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){return r.a.createElement($.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(Ce,null),r.a.createElement(Q.d,null,r.a.createElement(Q.b,{path:"/",component:lt,exact:!0}),r.a.createElement(Q.b,{path:"/signin",component:pt,exact:!0}),r.a.createElement(Q.b,{path:"/signup",component:ht,exact:!0}),r.a.createElement(Q.b,{path:"/movies/new",component:yt,exact:!0}),r.a.createElement(Q.b,{path:"/admin/movies",component:jt,exact:!0}),r.a.createElement(Q.b,{path:"/admin/movies/edit/:id",component:yt,exact:!0}),r.a.createElement(Q.b,{component:Re})),r.a.createElement(je,null)))}}]),t}(n.Component),wt=r.a.createElement(l.a,{store:V},r.a.createElement(St,null));i.a.render(wt,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[141,1,2]]]);
//# sourceMappingURL=main.bbd3276f.chunk.js.map