(window.webpackJsonp=window.webpackJsonp||[]).push([[6,5,9,11,12,13,15,16],{187:function(e,t,a){e.exports=a.p+"docs/img/portfolio-6ca7d966.svg"},188:function(e,t,a){e.exports=a.p+"docs/img/envelope-21b61457.svg"},189:function(e,t,a){e.exports=a.p+"docs/img/home-9edd9757.svg"},190:function(e,t,a){e.exports=a.p+"docs/img/tay-7befbe14.svg"},191:function(e,t,a){e.exports=a.p+"docs/img/clock-icon-158cbf2b.svg"},192:function(e,t,a){e.exports=a.p+"docs/img/lightning-icon-959e747c.svg"},193:function(e,t,a){e.exports=a.p+"docs/img/smile-icon-83444da4.svg"},37:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var l=v(a(35)),n=v(a(34)),r=v(a(33)),i=v(a(32)),d=v(a(31)),c=a(1),u=v(c),s=a(96),o=a(36),m=a(15),f=v(a(189)),_=v(a(188)),p=v(a(187));function v(e){return e&&e.__esModule?e:{default:e}}var E=function(e){function t(){return(0,n.default)(this,t),(0,i.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"drawer__inner"},u.default.createElement(m.MyContext.Consumer,null,function(e){return u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{className:"drawer__inner-item"},u.default.createElement(s.Link,{onClick:e.handleClickOutside,className:"drawer__inner-item--title",to:"/"},u.default.createElement("img",{src:f.default,alt:"",width:"100px"}),u.default.createElement("h1",null,"Home"))),u.default.createElement("div",{className:"drawer__inner-item"},u.default.createElement(s.Link,{onClick:e.handleClickOutside,className:"drawer__inner-item--title",to:"/portfolio"},u.default.createElement("img",{src:p.default,alt:"",width:"100px"}),u.default.createElement("h1",null,"Portfolio"))),u.default.createElement("div",{className:"drawer__inner-item"},u.default.createElement(s.Link,{onClick:e.handleClickOutside,className:"drawer__inner-item--title",to:"/contact"},u.default.createElement("img",{src:_.default,alt:"",width:"100px"})," ",u.default.createElement("h1",null,"Contact"))))}))}}]),t}(c.Component);t.default=(0,o.hot)(e)(E)}).call(this,a(17)(e))},38:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var l=_(a(35)),n=_(a(34)),r=_(a(33)),i=_(a(32)),d=_(a(31)),c=a(1),u=_(c),s=a(36),o=_(a(199)),m=_(a(190)),f=a(96);function _(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(){return(0,n.default)(this,t),(0,i.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){var e=this;this.el=document.querySelector("#vivus"),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(new o.default("vivus",{file:m.default}),this.el.classList.add("finished")):new o.default("vivus",{file:m.default,type:"sync",duration:100,animTimingFunction:o.default.EASE_IN},function(t){e.el.classList.add("finished"),setTimeout(function(){return t.play(-1)},2e3)})}},{key:"render",value:function(){return u.default.createElement("div",{className:"header"},u.default.createElement(f.Link,{to:"/"},u.default.createElement("div",{id:"vivus",className:"header__title wrapper"})))}}]),t}(c.Component);t.default=(0,s.hot)(e)(p)}).call(this,a(17)(e))},39:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var l=_(a(35)),n=_(a(34)),r=_(a(33)),i=_(a(32)),d=_(a(31)),c=a(1),u=_(c),s=a(201),o=_(a(37)),m=a(15),f=a(36);function _(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(){return(0,n.default)(this,t),(0,i.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return u.default.createElement(m.MyContext.Consumer,null,function(e){return u.default.createElement(s.Motion,{style:{x:(0,s.spring)(e.state.open?25:0),y:(0,s.spring)(e.state.open?1:0)}},function(t){var a=t.x,l=t.y;return u.default.createElement("div",{className:"drawer",style:{width:a+"vw",opacity:""+l,visibility:e.state.open?"visible":"hidden"}},u.default.createElement(o.default,null))})})}}]),t}(c.Component);t.default=(0,f.hot)(e)(p)}).call(this,a(17)(e))},40:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var l=_(a(35)),n=_(a(34)),r=_(a(33)),i=_(a(32)),d=_(a(31)),c=a(1),u=_(c),s=a(36),o=_(a(193)),m=_(a(192)),f=_(a(191));function _(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(){return(0,n.default)(this,t),(0,i.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"info"},u.default.createElement("div",{className:"info__inner"},u.default.createElement("div",{className:"info__container"},u.default.createElement("div",{className:"info__icon"},u.default.createElement("img",{className:"info__icon--img",src:o.default,alt:""})),u.default.createElement("div",null,u.default.createElement("h2",{className:"info--title"},"Free Consultations"))),u.default.createElement("div",{className:"info__container info__container--middle"},u.default.createElement("div",{className:"info__icon"},u.default.createElement("img",{className:"info__icon--img",src:f.default,alt:""})),u.default.createElement("div",null,u.default.createElement("h2",{className:"info--title"},"Ongoing Technical Support"))),u.default.createElement("div",{className:"info__container"},u.default.createElement("div",{className:"info__icon"},u.default.createElement("img",{className:"info__icon--img",src:m.default,alt:""})),u.default.createElement("div",null,u.default.createElement("h2",{className:"info--title"},"Agile Development")))))}}]),t}(c.Component);t.default=(0,s.hot)(e)(p)}).call(this,a(17)(e))},42:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=s(a(35)),n=s(a(34)),r=s(a(33)),i=s(a(32)),d=s(a(31)),c=a(1),u=s(c);function s(e){return e&&e.__esModule?e:{default:e}}var o=function(e){function t(){return(0,n.default)(this,t),(0,i.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return u.default.createElement("div",{className:this.props.title},u.default.createElement("div",{className:this.props.title+"__bg"}))}}]),t}(c.Component);t.default=o},44:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=d(a(1)),n=d(a(42)),r=d(a(40)),i=a(96);function d(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return l.default.createElement("div",{className:"portfolio"},l.default.createElement("h1",{className:"wrapper portfolio--title"},"Are You Ready To Be Led Into The Future Of Digital Marketing?"),l.default.createElement("h2",{className:"wrapper portfolio--subtitle"}," Take Your Business To The Next Level And Scale With Me Online."),l.default.createElement(n.default,{title:"portfolio"}),l.default.createElement(i.Link,{to:"/contact",style:{textDecoration:"none"}},l.default.createElement("h1",{className:"portfolio__btn-container"},l.default.createElement("button",{style:{outline:"none"},className:"wrapper portfolio--btn"},"I Want To Breakthrough"))),l.default.createElement(r.default,null))}},47:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var l=o(a(35)),n=o(a(34)),r=o(a(33)),i=o(a(32)),d=o(a(31)),c=a(1),u=o(c),s=a(36);function o(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(){return(0,n.default)(this,t),(0,i.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"grid wrapper"},u.default.createElement("div",{className:"post grid__item-a"},u.default.createElement("div",{className:"grid__tags"},"Node, Git, GitHub, Webpack, Gulp, NPM, BEM, OOJS, ES6"),u.default.createElement("div",{className:"grid__date"},"14 May 2017"),u.default.createElement("h3",null,u.default.createElement("a",{href:"https://leafyshark.github.io/travel-site/",target:"_blank",className:"grid__heading"},"Travel Site")),u.default.createElement("div",{className:"company"},u.default.createElement("img",{src:""}),u.default.createElement("div",{className:"company--info"},"Learning Resource"),u.default.createElement("div",{className:"company--name"},u.default.createElement("a",{className:"company--link",href:"https://www.udemy.com/git-a-web-developer-job-mastering-the-modern-workflow/",target:"_blank"},"Git a Web Developer Job | Udemy")),u.default.createElement("div",{className:"company--title"},u.default.createElement("a",{className:"company--link",href:"https://learnwebcode.com/",target:"_blank"},"Brad Schiff, Web Developer"))),u.default.createElement("div",{className:"grid__bg grid__bg--center"})),u.default.createElement("div",{className:"post grid__item-b"},u.default.createElement("div",{className:"grid__tags"},"Vanilla JS, ES6, HTML, CSS"),u.default.createElement("div",{className:"grid__date"},"18 Feb 2018"),u.default.createElement("h3",null,u.default.createElement("a",{href:"https://blood-alcohol-calculator.herokuapp.com/",target:"_blank",className:"grid__heading"},"Blood Alcohol Calculator")),u.default.createElement("div",{className:"company"},u.default.createElement("img",{src:""}),u.default.createElement("div",{className:"company--info"},"Learning Resource"),u.default.createElement("div",{className:"company--name"},u.default.createElement("a",{className:"company--link",href:"https://www.amazon.co.uk/Exercises-Programmers-Challenges-Develop-Coding/dp/1680501224",target:"_blank"},"57 Exercises For Programmers")),u.default.createElement("div",{className:"company--title"},u.default.createElement("a",{className:"company--link",href:"https://bphogan.com/",target:"_blank"},"Brian P. Hogan, Web Developer"))),u.default.createElement("div",{className:"grid__bg grid__bg--center"})),u.default.createElement("div",{className:"post post__main grid__item-c"},u.default.createElement("h1",{className:"grid__heading grid__heading--main"},"Websites I've Built")),u.default.createElement("div",{className:"post grid__item-d"},u.default.createElement("div",{className:"grid__tags"},"Node, Express, React"),u.default.createElement("div",{className:"grid__date"},"Still In Development!"),u.default.createElement("h3",null,u.default.createElement("a",{href:"#",className:"grid__heading"},"Campus Exchange")),u.default.createElement("div",{className:"company"},u.default.createElement("img",{src:""}),u.default.createElement("div",{className:"company--info"},"Personal Project"),u.default.createElement("div",{className:"company--name"},"The Campus Exchange"),u.default.createElement("div",{className:"company--title"},"Me")),u.default.createElement("div",{className:"grid__bg grid__bg--center"})),u.default.createElement("div",{className:"post grid__item-e"},u.default.createElement("div",{className:"grid__tags"},"PHP, WordPress"),u.default.createElement("div",{className:"grid__date"},"24 Apr 2018"),u.default.createElement("h3",null,u.default.createElement("a",{href:"https://www.zambonfitness.com/",target:"_blank",className:"grid__heading"},"Zambon Fitness")),u.default.createElement("div",{className:"company"},u.default.createElement("img",{src:""}),u.default.createElement("div",{className:"company--info"},"Client Work"),u.default.createElement("div",{className:"company--name"},"Zambon Fitness Jersey"),u.default.createElement("div",{className:"company--title"},"Me")),u.default.createElement("div",{className:"grid__bg grid__bg--center"})),u.default.createElement("div",{className:"post grid__item-f"},u.default.createElement("div",{className:"grid__tags"},"PHP, WordPress, JS, CSS, HTML"),u.default.createElement("div",{className:"grid__date"},"11 Jun 2018"),u.default.createElement("h3",null,u.default.createElement("a",{href:"https://islanderplan.gg/",target:"_blank",className:"grid__heading"},"Islander Plan")),u.default.createElement("div",{className:"company"},u.default.createElement("img",{src:""}),u.default.createElement("div",{className:"company--info"},"Client Work"),u.default.createElement("div",{className:"company--name"},"Airtel Vodafone Jersey"),u.default.createElement("div",{className:"company--title"},"Me & Jack Mackenzie")),u.default.createElement("div",{className:"grid__bg grid__bg--center"})))}}]),t}(c.Component);t.default=(0,s.hot)(e)(m)}).call(this,a(17)(e))},50:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var l=p(a(35)),n=p(a(34)),r=p(a(33)),i=p(a(32)),d=p(a(31)),c=a(1),u=p(c),s=a(36),o=p(a(38)),m=p(a(47)),f=p(a(39)),_=p(a(44));function p(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(){return(0,n.default)(this,t),(0,i.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"main-background"},u.default.createElement(f.default,null),u.default.createElement("div",{onClick:this.props.clickOutsideHandler},u.default.createElement(o.default,null),u.default.createElement(_.default,null),u.default.createElement(m.default,null)))}}]),t}(c.Component);t.default=(0,s.hot)(e)(v)}).call(this,a(17)(e))}}]);