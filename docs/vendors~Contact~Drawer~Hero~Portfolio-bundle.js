(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{195:function(e,t,n){(function(t){for(var r=n(205),a="undefined"==typeof window?t:window,l=["moz","webkit"],i="AnimationFrame",o=a["request"+i],u=a["cancel"+i]||a["cancelRequest"+i],s=0;!o&&s<l.length;s++)o=a[l[s]+"Request"+i],u=a[l[s]+"Cancel"+i]||a[l[s]+"CancelRequest"+i];if(!o||!u){var c=0,f=0,d=[];o=function(e){if(0===d.length){var t=r(),n=Math.max(0,1e3/60-(t-c));c=n+t,setTimeout(function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return d.push({handle:++f,callback:e,cancelled:!1}),f},u=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return o.call(a,e)},e.exports.cancel=function(){u.apply(a,arguments)},e.exports.polyfill=function(e){e||(e=a),e.requestAnimationFrame=o,e.cancelAnimationFrame=u}}).call(this,n(69))},200:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]="number"==typeof e[n]?e[n]:e[n].val);return t},e.exports=t.default},201:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e.default:e}t.__esModule=!0;var a=n(236);t.Motion=r(a);var l=n(235);t.StaggeredMotion=r(l);var i=n(234);t.TransitionMotion=r(i);var o=n(232);t.spring=r(o);var u=n(215);t.presets=r(u);var s=n(200);t.stripStyle=r(s);var c=n(231);t.reorderKeys=r(c)},204:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(0!==n[r])return!1;var a="number"==typeof t[r]?t[r]:t[r].val;if(e[r]!==a)return!1}return!0},e.exports=t.default},205:function(e,t,n){(function(t){(function(){var n,r,a,l,i,o;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-i)/1e6},r=t.hrtime,l=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),o=1e9*t.uptime(),i=l-o):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}).call(this)}).call(this,n(97))},206:function(e,t,n){(function(t){(function(){var n,r,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,a=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})()):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}).call(this)}).call(this,n(97))},207:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n,a,l,i,o){var u=n+(-l*(t-a)+-i*n)*e,s=t+u*e;return Math.abs(u)<o&&Math.abs(s-a)<o?(r[0]=a,r[1]=0,r):(r[0]=s,r[1]=u,r)};var r=[0,0];e.exports=t.default},208:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=0);return t},e.exports=t.default},215:function(e,t,n){"use strict";t.__esModule=!0,t.default={noWobble:{stiffness:170,damping:26},gentle:{stiffness:120,damping:14},wobbly:{stiffness:180,damping:12},stiff:{stiffness:210,damping:20}},e.exports=t.default},231:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(){},e.exports=t.default},232:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e,t){return r({},l,t,{val:e})};var a=function(e){return e&&e.__esModule?e:{default:e}}(n(215)),l=r({},a.default.noWobble,{precision:.01});e.exports=t.default},233:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n){for(var r={},a=0;a<e.length;a++)r[e[a].key]=a;var l={};for(a=0;a<t.length;a++)l[t[a].key]=a;var i=[];for(a=0;a<t.length;a++)i[a]=t[a];for(a=0;a<e.length;a++)if(!Object.prototype.hasOwnProperty.call(l,e[a].key)){var o=n(a,e[a]);null!=o&&i.push(o)}return i.sort(function(e,n){var a=l[e.key],i=l[n.key],o=r[e.key],u=r[n.key];if(null!=a&&null!=i)return l[e.key]-l[n.key];if(null!=o&&null!=u)return r[e.key]-r[n.key];if(null!=a){for(var s=0;s<t.length;s++){var c=t[s].key;if(Object.prototype.hasOwnProperty.call(r,c)){if(a<l[c]&&u>r[c])return-1;if(a>l[c]&&u<r[c])return 1}}return 1}for(s=0;s<t.length;s++){c=t[s].key;if(Object.prototype.hasOwnProperty.call(r,c)){if(i<l[c]&&o>r[c])return 1;if(i>l[c]&&o<r[c])return-1}}return-1})},e.exports=t.default},234:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function l(e){return e&&e.__esModule?e:{default:e}}var i=l(n(208)),o=l(n(200)),u=l(n(207)),s=l(n(233)),c=l(n(206)),f=l(n(195)),d=l(n(204)),p=l(n(1)),y=l(n(0)),m=1e3/60;function h(e,t,n){var r=t;return null==r?e.map(function(e,t){return{key:e.key,data:e.data,style:n[t]}}):e.map(function(e,t){for(var a=0;a<r.length;a++)if(r[a].key===e.key)return{key:r[a].key,data:r[a].data,style:n[t]};return{key:e.key,data:e.data,style:n[t]}})}function v(e,t,n,r,a,l,o,u,c){for(var f=s.default(r,a,function(e,r){var a=t(r);return null==a?(n({key:r.key,data:r.data}),null):d.default(l[e],a,o[e])?(n({key:r.key,data:r.data}),null):{key:r.key,data:r.data,style:a}}),p=[],y=[],m=[],h=[],v=0;v<f.length;v++){for(var b=f[v],S=null,g=0;g<r.length;g++)if(r[g].key===b.key){S=g;break}if(null==S){var I=e(b);p[v]=I,m[v]=I;var w=i.default(b.style);y[v]=w,h[v]=w}else p[v]=l[S],m[v]=u[S],y[v]=o[S],h[v]=c[S]}return[f,p,y,m,h]}var b=function(e){function t(n){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,n),this.unmounting=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=v(a.props.willEnter,a.props.willLeave,a.props.didLeave,a.state.mergedPropsStyles,e,a.state.currentStyles,a.state.currentVelocities,a.state.lastIdealStyles,a.state.lastIdealVelocities),n=t[0],l=t[1],i=t[2],o=t[3],u=t[4],s=0;s<e.length;s++){var c=e[s].style,f=!1;for(var d in c)if(Object.prototype.hasOwnProperty.call(c,d)){var p=c[d];"number"==typeof p&&(f||(f=!0,l[s]=r({},l[s]),i[s]=r({},i[s]),o[s]=r({},o[s]),u[s]=r({},u[s]),n[s]={key:n[s].key,data:n[s].data,style:r({},n[s].style)}),l[s][d]=p,i[s][d]=0,o[s][d]=p,u[s][d]=0,n[s].style[d]=p)}}a.setState({currentStyles:l,currentVelocities:i,mergedPropsStyles:n,lastIdealStyles:o,lastIdealVelocities:u})},this.startAnimationIfNecessary=function(){a.unmounting||(a.animationID=f.default(function(e){if(!a.unmounting){var t=a.props.styles,n="function"==typeof t?t(h(a.state.mergedPropsStyles,a.unreadPropStyles,a.state.lastIdealStyles)):t;if(function(e,t,n,r){if(r.length!==t.length)return!1;for(var a=0;a<r.length;a++)if(r[a].key!==t[a].key)return!1;for(a=0;a<r.length;a++)if(!d.default(e[a],t[a].style,n[a]))return!1;return!0}(a.state.currentStyles,n,a.state.currentVelocities,a.state.mergedPropsStyles))return a.animationID=null,void(a.accumulatedTime=0);var r=e||c.default(),l=r-a.prevTime;if(a.prevTime=r,a.accumulatedTime=a.accumulatedTime+l,a.accumulatedTime>10*m&&(a.accumulatedTime=0),0===a.accumulatedTime)return a.animationID=null,void a.startAnimationIfNecessary();for(var i=(a.accumulatedTime-Math.floor(a.accumulatedTime/m)*m)/m,o=Math.floor(a.accumulatedTime/m),s=v(a.props.willEnter,a.props.willLeave,a.props.didLeave,a.state.mergedPropsStyles,n,a.state.currentStyles,a.state.currentVelocities,a.state.lastIdealStyles,a.state.lastIdealVelocities),f=s[0],p=s[1],y=s[2],b=s[3],S=s[4],g=0;g<f.length;g++){var I=f[g].style,w={},T={},O={},P={};for(var k in I)if(Object.prototype.hasOwnProperty.call(I,k)){var _=I[k];if("number"==typeof _)w[k]=_,T[k]=0,O[k]=_,P[k]=0;else{for(var D=b[g][k],j=S[g][k],M=0;M<o;M++){var V=u.default(m/1e3,D,j,_.val,_.stiffness,_.damping,_.precision);D=V[0],j=V[1]}var x=u.default(m/1e3,D,j,_.val,_.stiffness,_.damping,_.precision),A=x[0],R=x[1];w[k]=D+(A-D)*i,T[k]=j+(R-j)*i,O[k]=D,P[k]=j}}b[g]=O,S[g]=P,p[g]=w,y[g]=T}a.animationID=null,a.accumulatedTime-=o*m,a.setState({currentStyles:p,currentVelocities:y,lastIdealStyles:b,lastIdealVelocities:S,mergedPropsStyles:f}),a.unreadPropStyles=null,a.startAnimationIfNecessary()}}))},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,null,[{key:"propTypes",value:{defaultStyles:y.default.arrayOf(y.default.shape({key:y.default.string.isRequired,data:y.default.any,style:y.default.objectOf(y.default.number).isRequired})),styles:y.default.oneOfType([y.default.func,y.default.arrayOf(y.default.shape({key:y.default.string.isRequired,data:y.default.any,style:y.default.objectOf(y.default.oneOfType([y.default.number,y.default.object])).isRequired}))]).isRequired,children:y.default.func.isRequired,willEnter:y.default.func,willLeave:y.default.func,didLeave:y.default.func},enumerable:!0},{key:"defaultProps",value:{willEnter:function(e){return o.default(e.style)},willLeave:function(){return null},didLeave:function(){}},enumerable:!0}]),t.prototype.defaultState=function(){var e,t=this.props,n=t.defaultStyles,r=t.styles,a=t.willEnter,l=t.willLeave,u=t.didLeave,s="function"==typeof r?r(n):r;e=null==n?s:n.map(function(e){for(var t=0;t<s.length;t++)if(s[t].key===e.key)return s[t];return e});var c=null==n?s.map(function(e){return o.default(e.style)}):n.map(function(e){return o.default(e.style)}),f=null==n?s.map(function(e){return i.default(e.style)}):n.map(function(e){return i.default(e.style)}),d=v(a,l,u,e,s,c,f,c,f),p=d[0];return{currentStyles:d[1],currentVelocities:d[2],lastIdealStyles:d[3],lastIdealVelocities:d[4],mergedPropsStyles:p}},t.prototype.componentDidMount=function(){this.prevTime=c.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles);var t=e.styles;this.unreadPropStyles="function"==typeof t?t(h(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.lastIdealStyles)):t,null==this.animationID&&(this.prevTime=c.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){this.unmounting=!0,null!=this.animationID&&(f.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=h(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.currentStyles),t=this.props.children(e);return t&&p.default.Children.only(t)},t}(p.default.Component);t.default=b,e.exports=t.default},235:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function l(e){return e&&e.__esModule?e:{default:e}}var i=l(n(208)),o=l(n(200)),u=l(n(207)),s=l(n(206)),c=l(n(195)),f=l(n(204)),d=l(n(1)),p=l(n(0)),y=1e3/60,m=function(e){function t(n){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,n),this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=a.state,n=t.currentStyles,l=t.currentVelocities,i=t.lastIdealStyles,o=t.lastIdealVelocities,u=!1,s=0;s<e.length;s++){var c=e[s],f=!1;for(var d in c)if(Object.prototype.hasOwnProperty.call(c,d)){var p=c[d];"number"==typeof p&&(f||(f=!0,u=!0,n[s]=r({},n[s]),l[s]=r({},l[s]),i[s]=r({},i[s]),o[s]=r({},o[s])),n[s][d]=p,l[s][d]=0,i[s][d]=p,o[s][d]=0)}}u&&a.setState({currentStyles:n,currentVelocities:l,lastIdealStyles:i,lastIdealVelocities:o})},this.startAnimationIfNecessary=function(){a.animationID=c.default(function(e){var t=a.props.styles(a.state.lastIdealStyles);if(function(e,t,n){for(var r=0;r<e.length;r++)if(!f.default(e[r],t[r],n[r]))return!1;return!0}(a.state.currentStyles,t,a.state.currentVelocities))return a.animationID=null,void(a.accumulatedTime=0);var n=e||s.default(),r=n-a.prevTime;if(a.prevTime=n,a.accumulatedTime=a.accumulatedTime+r,a.accumulatedTime>10*y&&(a.accumulatedTime=0),0===a.accumulatedTime)return a.animationID=null,void a.startAnimationIfNecessary();for(var l=(a.accumulatedTime-Math.floor(a.accumulatedTime/y)*y)/y,i=Math.floor(a.accumulatedTime/y),o=[],c=[],d=[],p=[],m=0;m<t.length;m++){var h=t[m],v={},b={},S={},g={};for(var I in h)if(Object.prototype.hasOwnProperty.call(h,I)){var w=h[I];if("number"==typeof w)v[I]=w,b[I]=0,S[I]=w,g[I]=0;else{for(var T=a.state.lastIdealStyles[m][I],O=a.state.lastIdealVelocities[m][I],P=0;P<i;P++){var k=u.default(y/1e3,T,O,w.val,w.stiffness,w.damping,w.precision);T=k[0],O=k[1]}var _=u.default(y/1e3,T,O,w.val,w.stiffness,w.damping,w.precision),D=_[0],j=_[1];v[I]=T+(D-T)*l,b[I]=O+(j-O)*l,S[I]=T,g[I]=O}}d[m]=v,p[m]=b,o[m]=S,c[m]=g}a.animationID=null,a.accumulatedTime-=i*y,a.setState({currentStyles:d,currentVelocities:p,lastIdealStyles:o,lastIdealVelocities:c}),a.unreadPropStyles=null,a.startAnimationIfNecessary()})},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,null,[{key:"propTypes",value:{defaultStyles:p.default.arrayOf(p.default.objectOf(p.default.number)),styles:p.default.func.isRequired,children:p.default.func.isRequired},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=t||n().map(o.default),a=r.map(function(e){return i.default(e)});return{currentStyles:r,currentVelocities:a,lastIdealStyles:r,lastIdealVelocities:a}},t.prototype.componentDidMount=function(){this.prevTime=s.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles),this.unreadPropStyles=e.styles(this.state.lastIdealStyles),null==this.animationID&&(this.prevTime=s.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(c.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyles);return e&&d.default.Children.only(e)},t}(d.default.Component);t.default=m,e.exports=t.default},236:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function l(e){return e&&e.__esModule?e:{default:e}}var i=l(n(208)),o=l(n(200)),u=l(n(207)),s=l(n(206)),c=l(n(195)),f=l(n(204)),d=l(n(1)),p=l(n(0)),y=1e3/60,m=function(e){function t(n){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,n),this.wasAnimating=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyle=null,this.clearUnreadPropStyle=function(e){var t=!1,n=a.state,l=n.currentStyle,i=n.currentVelocity,o=n.lastIdealStyle,u=n.lastIdealVelocity;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var c=e[s];"number"==typeof c&&(t||(t=!0,l=r({},l),i=r({},i),o=r({},o),u=r({},u)),l[s]=c,i[s]=0,o[s]=c,u[s]=0)}t&&a.setState({currentStyle:l,currentVelocity:i,lastIdealStyle:o,lastIdealVelocity:u})},this.startAnimationIfNecessary=function(){a.animationID=c.default(function(e){var t=a.props.style;if(f.default(a.state.currentStyle,t,a.state.currentVelocity))return a.wasAnimating&&a.props.onRest&&a.props.onRest(),a.animationID=null,a.wasAnimating=!1,void(a.accumulatedTime=0);a.wasAnimating=!0;var n=e||s.default(),r=n-a.prevTime;if(a.prevTime=n,a.accumulatedTime=a.accumulatedTime+r,a.accumulatedTime>10*y&&(a.accumulatedTime=0),0===a.accumulatedTime)return a.animationID=null,void a.startAnimationIfNecessary();var l=(a.accumulatedTime-Math.floor(a.accumulatedTime/y)*y)/y,i=Math.floor(a.accumulatedTime/y),o={},c={},d={},p={};for(var m in t)if(Object.prototype.hasOwnProperty.call(t,m)){var h=t[m];if("number"==typeof h)d[m]=h,p[m]=0,o[m]=h,c[m]=0;else{for(var v=a.state.lastIdealStyle[m],b=a.state.lastIdealVelocity[m],S=0;S<i;S++){var g=u.default(y/1e3,v,b,h.val,h.stiffness,h.damping,h.precision);v=g[0],b=g[1]}var I=u.default(y/1e3,v,b,h.val,h.stiffness,h.damping,h.precision),w=I[0],T=I[1];d[m]=v+(w-v)*l,p[m]=b+(T-b)*l,o[m]=v,c[m]=b}}a.animationID=null,a.accumulatedTime-=i*y,a.setState({currentStyle:d,currentVelocity:p,lastIdealStyle:o,lastIdealVelocity:c}),a.unreadPropStyle=null,a.startAnimationIfNecessary()})},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,null,[{key:"propTypes",value:{defaultStyle:p.default.objectOf(p.default.number),style:p.default.objectOf(p.default.oneOfType([p.default.number,p.default.object])).isRequired,children:p.default.func.isRequired,onRest:p.default.func},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyle,n=e.style,r=t||o.default(n),a=i.default(r);return{currentStyle:r,currentVelocity:a,lastIdealStyle:r,lastIdealVelocity:a}},t.prototype.componentDidMount=function(){this.prevTime=s.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyle&&this.clearUnreadPropStyle(this.unreadPropStyle),this.unreadPropStyle=e.style,null==this.animationID&&(this.prevTime=s.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(c.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyle);return e&&d.default.Children.only(e)},t}(d.default.Component);t.default=m,e.exports=t.default}}]);