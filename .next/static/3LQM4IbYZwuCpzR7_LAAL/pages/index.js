(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RNiq:function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),o=n.n(r),a=n("O40h"),i=n("q1tI"),s=n.n(i),u=n("YFqc"),l=n.n(u),c=n("zCU7"),p=n.n(c);function f(e){var t=e.posts,n=void 0===t?[]:t;return s.a.createElement("div",null,s.a.createElement("h1",null,"Welcome to a blog!"),n.length>0&&n.map(function(e){var t=e._id,n=e.title,r=void 0===n?"":n,o=e.slug,a=void 0===o?"":o,i=e._updatedAt,u=void 0===i?"":i;return a&&s.a.createElement("li",{key:t},s.a.createElement(l.a,{prefetch:!0,href:"/p/".concat(a.current)},s.a.createElement("a",null,r))," ","(",new Date(u).toDateString(),")")}))}f.getInitialProps=Object(a.default)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.fetch('*[_type == "post"]');case 2:return e.t0=e.sent,e.abrupt("return",{posts:e.t0});case 4:case"end":return e.stop()}},e)})),t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("KI45"),o=r(n("0iUn")),a=r(n("sLSF")),i=r(n("MI3g")),s=r(n("a7VT")),u=r(n("Tit0")),l=n("5Uuq"),c=n("KI45");t.__esModule=!0,t.default=void 0;var p,f=c(n("LX0d")),h=n("CxY0"),d=l(n("q1tI")),v=(c(n("17x9")),c(n("nOHt"))),w=(n("KA3u"),n("Bu4q"));function m(e){return e&&"object"===typeof e?(0,w.formatWithValidation)(e):e}var g=new f.default,y=window.IntersectionObserver;function k(){return p||(y?p=new y(function(e){e.forEach(function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),g.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var E=function(e){function t(){var e;return(0,o.default)(this,t),(e=(0,i.default)(this,(0,s.default)(t).apply(this,arguments))).cleanUpListeners=function(){},e.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}(function(e,t){return{href:m(e),as:t?m(t):t}}),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=e.formatUrls(e.props.href,e.props.as),i=a.href,s=a.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,w.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var u=window.location.pathname;i=(0,h.resolve)(u,i),s=s?(0,h.resolve)(u,s):i,t.preventDefault();var l=e.props.scroll;null==l&&(l=s.indexOf("#")<0),v.default[e.props.replace?"replace":"push"](i,s,{shallow:e.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})}}},e}return(0,u.default)(t,e),(0,a.default)(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.props.prefetch&&y&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=k();return n?(n.observe(e),g.set(e,t),function(){n.unobserve(e),g.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.props.prefetch){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,h.resolve)(e,t);v.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var a=d.Children.only(t),i={ref:function(t){return e.handleRef(t)},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch()},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),d.default.cloneElement(a,i)}}]),t}(d.Component);E.propTypes=void 0,E.defaultProps={prefetch:!0};var U=E;t.default=U},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("RNiq");return{page:e.default||e}}])}},[["vlRD",1,0]]]);