(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7106183e"],{"0069":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("AdminNavBar"),s("div",{staticClass:"admin-section"},[s("AdminSideBar"),s("transition",{attrs:{name:"land",mode:"out-in"}},[s("router-view")],1)],1)],1)},e=[],r=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"admin-nav__bar"},[i("router-link",{staticClass:"__logo",attrs:{to:{name:"LandingPage"}}},[i("img",{attrs:{src:s("3f0a"),alt:"total-logo"}})]),i("div",{staticClass:"user__details"},[i("div",{staticClass:"__left"},[i("div",{staticClass:"__wrap"},[Object.keys(t.adminDetails).length?i("h1",[t._v(" "+t._s(t.adminDetails.last_name+" "+t.adminDetails.first_name)+" ")]):t._e(),t._m(0)]),t._m(1)]),i("div",{staticClass:"__separator"}),i("div",{staticClass:"__logout-icon",on:{click:t.logout}},[i("img",{attrs:{src:s("6646"),alt:"logout-icon"}}),i("div",{staticClass:"logout__text"},[t._v("Logout")])])])],1)},o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"__dot"}),s("p",[t._v("Admin")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"profile__pic"},[i("img",{attrs:{src:s("b99b"),alt:"profile-pic"}})])}],n=s("5530"),d=s("2f62"),c={computed:Object(n["a"])({},Object(d["c"])(["adminDetails"])),methods:Object(n["a"])({},Object(d["d"])(["logout"]))},l=c,u=s("2877"),m=Object(u["a"])(l,r,o,!1,null,null,null),p=m.exports,_=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"admin-sidebar"},[i("router-link",{staticClass:"admin-sidebar-icons__wrapper",attrs:{tag:"div",to:{path:"/admin-dashboard"}}},[i("p",{staticClass:"admin-sidebar-text"},[t._v("Home")]),i("div",{staticClass:"admin-sidebar-icons"},[i("img",{attrs:{src:s("09be"),alt:""}})])]),i("router-link",{staticClass:"admin-sidebar-icons__wrapper",attrs:{tag:"div",to:{path:"/admin-dashboard/add-user"}}},[i("p",{staticClass:"admin-sidebar-text"},[t._v("Add New User")]),i("div",{staticClass:"admin-sidebar-icons"},[i("img",{attrs:{src:s("d5e4"),alt:""}})])]),i("div",{staticClass:"admin-sidebar-icons__surround"},[i("div",{staticClass:"admin-sidebar-icons__wrapper",class:{"admin-sidebar-icons__wrapper-active":"/admin-dashboard/product"===t.$route.path}},[t._m(0),t._m(1)]),i("transition",{attrs:{name:"products-list"}},[i("div",{staticClass:"admin-sidebar-product-category-wrapper",style:{"--order":t.products.length}},t._l(t.products,(function(a,s){return i("div",{key:s,on:{click:t.setProductType}},[i("router-link",{staticClass:"admin-sidebar-product-category",class:{"admin-sidebar-product-category-active":t.$route.query.name===a},attrs:{tag:"div",to:{path:"/admin-dashboard/product",query:{name:a}}}},[t._v(" "+t._s(a)+" ")])],1)})),0)])],1)],1)},g=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("p",{staticClass:"admin-sidebar-text admin-sidebar-text--products"},[t._v(" Products "),i("span",{staticClass:"admin-sidebar-text--products-right-arrow"},[i("img",{attrs:{src:s("1df7"),alt:"right arrow"}})])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"admin-sidebar-icons"},[i("img",{attrs:{src:s("c7fa"),alt:"products icon"}})])}],v=(s("b0c0"),{name:"adminSidebar",data:function(){return{products:["Blend","Additive","Base oil"],productShowing:null}},computed:Object(n["a"])({},Object(d["c"])(["productName","productCategory"])),methods:Object(n["a"])(Object(n["a"])({},Object(d["d"])(["setProductCategory","setProductName"])),{},{setProductType:function(){this.setProductCategory({product_type:this.$route.query.name})}}),watch:{$route:function(t){"/admin-dashboard/product"!==t.path&&this.setProductCategory({})},successAddingProduct:function(t){t&&this.scrollToTop(product)}},destroyed:function(){this.setProductName(null),this.setProductCategory({})}}),b=v,f=Object(u["a"])(b,_,g,!1,null,null,null),h=f.exports,C={name:"adminDashboard",components:{AdminNavBar:p,AdminSideBar:h},computed:{isIdle:function(){return this.isAppIdle}},watch:{isIdle:function(t){t&&(this.$store.commit("logout"),this.$store.commit("inactiveMsg","You were logged out due to inactivity"))}}},w=C,y=Object(u["a"])(w,i,e,!1,null,null,null);a["default"]=y.exports},"09be":function(t,a,s){t.exports=s.p+"img/home-icon.aac82668.svg"},"1df7":function(t,a,s){t.exports=s.p+"img/right-arrow.83ce2a30.svg"},"3f0a":function(t,a,s){t.exports=s.p+"img/total-logo 1.d59a09c8.svg"},6646:function(t,a,s){t.exports=s.p+"img/admin logout.d41de8a4.svg"},b99b:function(t,a,s){t.exports=s.p+"img/admin user 1.f6bea2ce.svg"},c7fa:function(t,a,s){t.exports=s.p+"img/products-icon.f54df044.svg"},d5e4:function(t,a,s){t.exports=s.p+"img/add-user.1841d9e1.svg"}}]);
//# sourceMappingURL=chunk-7106183e.3686759c.js.map