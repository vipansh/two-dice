(this["webpackJsonpdice-project"]=this["webpackJsonpdice-project"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),l=(n(13),n(1)),c=n(2),s=n(3),u=n(5),h=n(4),d=(n(14),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e="Die fas fa-dice-".concat(this.props.face," ").concat(this.props.rolling?"rolling":"");return o.a.createElement("i",{className:e})}}]),n}(a.Component)),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={die1:"one",die2:"one",rolling:!1},a.roll=a.roll.bind(Object(s.a)(a)),a}return Object(c.a)(n,[{key:"roll",value:function(){var e=this,t=this.props.sides[Math.floor(5*Math.random())],n=this.props.sides[Math.floor(5*Math.random())];this.setState({die1:t,die2:n,rolling:!0}),setTimeout((function(){e.setState({rolling:!1})}),500)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d,{face:this.state.die1,rolling:this.state.rolling}),o.a.createElement(d,{face:this.state.die2,rolling:this.state.rolling})," ",o.a.createElement("br",null),o.a.createElement("button",{onClick:this.roll,disabled:this.state.rolling},this.state.rolling?"Rolling...":"Roll Dice"))}}]),n}(a.Component);f.defaultProps={sides:["one","two","three","four","five","six"]};var m=f;n(15);var p=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.55d16708.chunk.js.map