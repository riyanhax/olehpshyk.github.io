(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),n=a(8),r=a.n(n),l=(a(16),a(1)),o=a(2),c=a(4),u=a(3),m=a(5),d=a(6),p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleDetail=function(){a.setState(function(e){return{isDetailOpen:!e.isDetailOpen}})},a.state={isDetailOpen:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.hotel,t=this.state.isDetailOpen;return s.a.createElement("div",{className:"HotelCard"},s.a.createElement("div",{className:"main-content"},s.a.createElement("div",{className:"img-container"},s.a.createElement("img",{src:e.img,alt:"hotel"})),s.a.createElement("div",{className:"flex-container"},s.a.createElement("div",{className:"shot-info-container"},s.a.createElement("div",{className:"name-container"},s.a.createElement("span",{className:"hotel-name"},e.name)),s.a.createElement("div",{className:"rate-container"},s.a.createElement("div",{className:"rate-stars-container"},Array.from({length:5},function(e,t){return t}).map(function(t,a){return e.rate&&e.rate>t?s.a.createElement("div",{className:"rate-star-box",key:a},s.a.createElement("svg",{className:"rateOk",version:"1.1",viewBox:"0 0 19.481 19.481",enableBackground:"new 0 0 19.481 19.481",width:"20px",height:"20px"},s.a.createElement("g",null,s.a.createElement("path",{d:"m10.201,.758l2.478,5.865 6.344,.545c0.44,0.038 0.619,0.587 0.285,0.876l-4.812,4.169 1.442,6.202c0.1,0.431-0.367,0.77-0.745,0.541l-5.452-3.288-5.452,3.288c-0.379,0.228-0.845-0.111-0.745-0.541l1.442-6.202-4.813-4.17c-0.334-0.289-0.156-0.838 0.285-0.876l6.344-.545 2.478-5.864c0.172-0.408 0.749-0.408 0.921,0z",fill:"#000000"})))):s.a.createElement("div",{className:"rate-star-box",key:a},s.a.createElement("svg",{className:"rate",version:"1.1",viewBox:"0 0 19.481 19.481",enableBackground:"new 0 0 19.481 19.481",width:"20px",height:"20px"},s.a.createElement("g",null,s.a.createElement("path",{d:"m10.201,.758l2.478,5.865 6.344,.545c0.44,0.038 0.619,0.587 0.285,0.876l-4.812,4.169 1.442,6.202c0.1,0.431-0.367,0.77-0.745,0.541l-5.452-3.288-5.452,3.288c-0.379,0.228-0.845-0.111-0.745-0.541l1.442-6.202-4.813-4.17c-0.334-0.289-0.156-0.838 0.285-0.876l6.344-.545 2.478-5.864c0.172-0.408 0.749-0.408 0.921,0z",fill:"#666666"}))))})))),s.a.createElement("div",{className:"action-container"},s.a.createElement("button",{className:"detail-button",onClick:this.handleDetail},"View Detail")))),s.a.createElement("div",{className:"detail-content ".concat(t?"opened":"")},e.description?s.a.createElement("div",{className:"description-container"},s.a.createElement("p",{className:"description"},e.description)):s.a.createElement("div",{className:"description-container"},s.a.createElement("p",{className:"description"},"No description")),"true"===e.hasPool?s.a.createElement("div",{className:"hasPool-container"},s.a.createElement("span",{className:"hasPool"},"Hotel has a pool: YES")):s.a.createElement("div",{className:"hasPool-container"},s.a.createElement("span",{className:"hasPool"},"Hotel has a pool: NO")),e.price&&s.a.createElement("div",{className:"price-container"},e.price.single&&s.a.createElement("span",{className:"price"},"Single price: ",e.price.single,"\xa0$"),e.price.double&&s.a.createElement("span",{className:"price"},"Double price: ",e.price.double,"\xa0$"),e.price.twin&&s.a.createElement("span",{className:"price"},"Twin price: ",e.price.twin,"\xa0$")),e.address&&s.a.createElement("div",{className:"address-container"},s.a.createElement("span",{className:"address"},s.a.createElement("span",{className:"bold"},"Address:\xa0"),e.address)),e.location&&s.a.createElement("div",{className:"location-container"},e.location.lat&&s.a.createElement("span",{className:"location"},s.a.createElement("span",{className:"bold"},"Location:\xa0"),"lat:\xa0",e.location.lat),e.location.lon&&s.a.createElement("span",{className:"location"},"lon:\xa0",e.location.lon))))}}]),t}(i.Component),h=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.filteredHotels;return s.a.createElement("div",{className:"HotelList"},e&&e.map(function(e,t){return s.a.createElement("div",{className:"hotelCard-container",key:t},s.a.createElement(p,{hotel:e}))}))}}]),t}(i.Component),g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).intHandleChecked=function(){a.setState(function(e){return{isChecked:!e.isChecked}})},a.state={isChecked:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.handleChecked,a=void 0===t?function(){}:t;return s.a.createElement("div",{className:"Checkbox"},s.a.createElement("label",{className:"label-checkbox"},s.a.createElement("input",{type:"checkbox",className:"input",checked:this.state.isChecked,onChange:function(t){e.intHandleChecked(),a(t)}}),s.a.createElement("div",{className:"custom-checkbox"}),s.a.createElement("span",{className:"semi-bold"},"Has Pool")))}}]),t}(i.Component),b=a(9),v=a.n(b),f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).filterRate=function(e){var t=e;a.setState(function(){return{isRate:t}}),a.props.applyFilter(t,a.state.isPool,a.state.isName)},a.filterPool=function(){var e=!a.state.isPool;a.setState(function(e){return{isPool:!e.isPool}}),a.props.applyFilter(a.state.isRate,e,a.state.isName)},a.filterName=function(e){var t=e.target.value.toLowerCase();a.setState(function(){return{isName:t}}),a.props.applyFilter(a.state.isRate,a.state.isPool,t)},a.state={isRate:1,isPool:!1,isName:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"Filter"},s.a.createElement("form",null,s.a.createElement("div",{className:"filter-section"},s.a.createElement("h3",{className:"section-title"},"Stars"),s.a.createElement("div",{className:"rating-container"},s.a.createElement(v.a,{className:"Rating",start:0,stop:5,onChange:function(t){return e.filterRate(t)},initialRating:this.state.isRate,emptySymbol:["0+",2,3,4,5].map(function(e){return s.a.createElement("div",{className:"rating-item-box"},s.a.createElement("img",{src:"./img/star.png",className:"rating-icon",alt:"star"}),s.a.createElement("span",{className:"rating-icon-text"},e))}),fullSymbol:["0+",2,3,4,5].map(function(e){return s.a.createElement("div",{className:"rating-item-box-ok"},s.a.createElement("img",{src:"./img/starOk.png",className:"rating-icon",alt:"Full star"}),s.a.createElement("span",{className:"rating-icon-text-ok"},e))})}))),s.a.createElement("div",{className:"filter-section"},s.a.createElement("h3",{className:"section-title"},"Freebies"),s.a.createElement(g,{handleChecked:this.filterPool})),s.a.createElement("div",{className:"filter-section"},s.a.createElement("h3",{className:"section-title"},"Hotel Name"),s.a.createElement("div",{className:"search-input-container"},s.a.createElement("input",{className:"search-input",type:"text",placeholder:"Hotel Name",onChange:this.filterName}),s.a.createElement("img",{src:"./img/searching-glass.png",className:"search-icon",alt:"searching-glass"})))))}}]),t}(i.Component),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).applyFilter=function(e,t,i){var s=a.state.hotels;s=s.filter(function(a){return a.rate>=e&&(!t||"true"===a.hasPool)&&~a.name.toLowerCase().search(i)}),a.setState(function(){return{filteredHotels:s}})},a.state={hotels:[],isLoading:!1,filteredHotels:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({isLoading:!0}),this.setState({hotels:d.hotels,filteredHotels:d.hotels,isLoading:!1})}},{key:"render",value:function(){var e=this.state,t=e.filteredHotels;return e.isLoading?s.a.createElement("p",null,"Loading ..."):s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"logined-body"},s.a.createElement("div",{className:"Sidebar"},s.a.createElement(f,{applyFilter:this.applyFilter})),s.a.createElement(h,{filteredHotels:t})))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e){e.exports={hotels:[{name:"Euro Hotel Wembley",img:"https://source.unsplash.com/250x200/?hotel",address:"84 harken rd, London, England",location:{lat:"32.670295",lon:"35.107254"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et feugiat lorem, eu tincidunt enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse vitae viverra ipsum.",rate:"3",hasPool:"true",price:{single:100,double:150,twin:200}},{name:"Olympia Hotel",img:"https://source.unsplash.com/250x200/?hotel",address:"84 harken rd, London, England",location:{lat:"32.670295",lon:"35.107254"},description:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse vitae viverra ipsum. Nam eu sem feugiat, ultrices sem vitae, iaculis urna. Curabitur mauris mi, rhoncus nec luctus eget, elementum sed sapien.",rate:"4",hasPool:"false",price:{single:101,double:151,twin:201}},{name:"Kensington Hotel",img:"https://source.unsplash.com/250x200/?hotel",address:"84 harken rd, London, England",location:{lat:"32.670295",lon:"35.107254"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem feugiat, ultrices sem vitae, iaculis urna. Curabitur mauris mi, rhoncus nec luctus eget, elementum sed sapien.",rate:"2",hasPool:"true",price:{single:102,double:152,twin:202}},{name:"Palace Court Hotel",img:"https://source.unsplash.com/250x200/?hotel",address:"84 harken rd, London, England",location:{lat:"32.670295",lon:"35.107254"},description:"Nam eu sem feugiat, ultrices sem vitae, iaculis urna. Curabitur mauris mi, rhoncus nec luctus eget, elementum sed sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse vitae viverra ipsum.",rate:"3",hasPool:"false",price:{single:103,double:153,twin:203}},{name:"Travelodge Excel Hotel",img:"https://source.unsplash.com/250x200/?hotel",address:"84 harken rd, London, England",location:{lat:"32.670295",lon:"35.107254"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mauris mi, rhoncus nec luctus eget, elementum sed sapien.",rate:"5",hasPool:"false",price:{single:104,double:154,twin:204}},{name:"Euro Hotel Croydon",img:"https://source.unsplash.com/250x200/?hotel",address:"84 harken rd, London, England",location:{lat:"32.670295",lon:"35.107254"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et feugiat lorem, eu tincidunt enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse vitae viverra ipsum.",rate:"3",hasPool:"true",price:{single:100,double:150,twin:200}},{name:"Royal Olympia Hotel",img:"https://source.unsplash.com/250x200/?hotel",address:"84 harken rd, London, England",location:{lat:"32.670295",lon:"35.107254"},description:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse vitae viverra ipsum. Nam eu sem feugiat, ultrices sem vitae, iaculis urna. Curabitur mauris mi, rhoncus nec luctus eget, elementum sed sapien.",rate:"4",hasPool:"false",price:{single:101,double:151,twin:201}},{name:"Winchester Hotel",img:"https://source.unsplash.com/250x200/?hotel",address:"84 harken rd, London, England",location:{lat:"32.670295",lon:"35.107254"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem feugiat, ultrices sem vitae, iaculis urna. Curabitur mauris mi, rhoncus nec luctus eget, elementum sed sapien.",rate:"2",hasPool:"true",price:{single:102,double:152,twin:202}},{name:"Newbury Court Hotel",img:"https://source.unsplash.com/250x200/?hotel",address:"84 harken rd, London, England",location:{lat:"32.670295",lon:"35.107254"},description:"Nam eu sem feugiat, ultrices sem vitae, iaculis urna. Curabitur mauris mi, rhoncus nec luctus eget, elementum sed sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse vitae viverra ipsum.",rate:"3",hasPool:"true",price:{single:103,double:153,twin:203}},{name:"Travelodge Enfield Hotel",img:"https://source.unsplash.com/250x200/?hotel",address:"84 harken rd, London, England",location:{lat:"32.670295",lon:"35.107254"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mauris mi, rhoncus nec luctus eget, elementum sed sapien.",rate:"5",hasPool:"true",price:{single:104,double:154,twin:204}},{name:"Euro Hotel Chelsea",img:"https://source.unsplash.com/250x200/?hotel",address:"84 harken rd, London, England",location:{lat:"32.670295",lon:"35.107254"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et feugiat lorem, eu tincidunt enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse vitae viverra ipsum.",rate:"2",hasPool:"false",price:{single:100,double:150,twin:200}},{name:"Aylesbury Hotel",img:"https://source.unsplash.com/250x200/?hotel",address:"84 harken rd, London, England",location:{lat:"32.670295",lon:"35.107254"},description:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse vitae viverra ipsum. Nam eu sem feugiat, ultrices sem vitae, iaculis urna. Curabitur mauris mi, rhoncus nec luctus eget, elementum sed sapien.",rate:"4",hasPool:"true",price:{single:101,double:151,twin:201}},{name:"Dartford Hotel",img:"https://source.unsplash.com/250x200/?hotel",address:"84 harken rd, London, England",location:{lat:"32.670295",lon:"35.107254"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem feugiat, ultrices sem vitae, iaculis urna. Curabitur mauris mi, rhoncus nec luctus eget, elementum sed sapien.",rate:"2",hasPool:"false",price:{single:102,double:152,twin:202}},{name:"Whitechurch Court Hotel",img:"https://source.unsplash.com/250x200/?hotel",address:"84 harken rd, London, England",location:{lat:"32.670295",lon:"35.107254"},description:"Nam eu sem feugiat, ultrices sem vitae, iaculis urna. Curabitur mauris mi, rhoncus nec luctus eget, elementum sed sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse vitae viverra ipsum.",rate:"3",hasPool:"true",price:{single:103,double:153,twin:203}},{name:"Travelodge Hayes Hotel",img:"https://source.unsplash.com/250x200/?hotel",address:"84 harken rd, London, England",location:{lat:"32.670295",lon:"35.107254"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mauris mi, rhoncus nec luctus eget, elementum sed sapien.",rate:"5",hasPool:"true",price:{single:104,double:154,twin:204}},{name:"Euro Hotel Farnham",img:"https://source.unsplash.com/250x200/?hotel",address:"84 harken rd, London, England",location:{lat:"32.670295",lon:"35.107254"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et feugiat lorem, eu tincidunt enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse vitae viverra ipsum.",rate:"3",hasPool:"false",price:{single:100,double:150,twin:200}},{name:"Olympian Hotel",img:"https://source.unsplash.com/250x200/?hotel",address:"84 harken rd, London, England",location:{lat:"32.670295",lon:"35.107254"},description:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse vitae viverra ipsum. Nam eu sem feugiat, ultrices sem vitae, iaculis urna. Curabitur mauris mi, rhoncus nec luctus eget, elementum sed sapien.",rate:"4",hasPool:"true",price:{single:101,double:151,twin:201}},{name:"Oxford Hotel",img:"https://source.unsplash.com/250x200/?hotel",address:"84 harken rd, London, England",location:{lat:"32.670295",lon:"35.107254"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem feugiat, ultrices sem vitae, iaculis urna. Curabitur mauris mi, rhoncus nec luctus eget, elementum sed sapien.",rate:"5",hasPool:"false",price:{single:102,double:152,twin:202}},{name:"Broadchurch Court Hotel",img:"https://source.unsplash.com/250x200/?hotel",address:"84 harken rd, London, England",location:{lat:"32.670295",lon:"35.107254"},description:"Nam eu sem feugiat, ultrices sem vitae, iaculis urna. Curabitur mauris mi, rhoncus nec luctus eget, elementum sed sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse vitae viverra ipsum.",rate:"3",hasPool:"true",price:{single:103,double:153,twin:203}},{name:"Travelodge Windsor Hotel",img:"https://source.unsplash.com/250x200/?hotel",address:"84 harken rd, London, England",location:{lat:"32.670295",lon:"35.107254"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mauris mi, rhoncus nec luctus eget, elementum sed sapien.",rate:"5",hasPool:"true",price:{single:104,double:154,twin:204}},{name:"Euro Hotel Harrow",img:"https://source.unsplash.com/250x200/?hotel",address:"84 harken rd, London, England",location:{lat:"32.670295",lon:"35.107254"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et feugiat lorem, eu tincidunt enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse vitae viverra ipsum.",rate:"3",hasPool:"true",price:{single:100,double:150,twin:200}},{name:"Slough Hotel",img:"https://source.unsplash.com/250x200/?hotel",address:"84 harken rd, London, England",location:{lat:"32.670295",lon:"35.107254"},description:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse vitae viverra ipsum. Nam eu sem feugiat, ultrices sem vitae, iaculis urna. Curabitur mauris mi, rhoncus nec luctus eget, elementum sed sapien.",rate:"4",hasPool:"true",price:{single:101,double:151,twin:201}},{name:"Epson Hotel",img:"https://source.unsplash.com/250x200/?hotel",address:"84 harken rd, London, England",location:{lat:"32.670295",lon:"35.107254"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem feugiat, ultrices sem vitae, iaculis urna. Curabitur mauris mi, rhoncus nec luctus eget, elementum sed sapien.",rate:"5",hasPool:"false",price:{single:102,double:152,twin:202}},{name:"Chilton Court Hotel",img:"https://source.unsplash.com/250x200/?hotel",address:"84 harken rd, London, England",location:{lat:"32.670295",lon:"35.107254"},description:"Nam eu sem feugiat, ultrices sem vitae, iaculis urna. Curabitur mauris mi, rhoncus nec luctus eget, elementum sed sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse vitae viverra ipsum.",rate:"3",hasPool:"true",price:{single:103,double:153,twin:203}},{name:"Travelodge Ascot Hotel",img:"https://source.unsplash.com/250x200/?hotel",address:"84 harken rd, London, England",location:{lat:"32.670295",lon:"35.107254"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mauris mi, rhoncus nec luctus eget, elementum sed sapien.",rate:"4",hasPool:"false",price:{single:104,double:154,twin:204}}]}}},[[10,2,1]]]);
//# sourceMappingURL=main.f69f14dd.chunk.js.map