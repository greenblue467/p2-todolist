(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{1:function(t,e,n){},12:function(t,e,n){t.exports=n(18)},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(6),i=n.n(c),r=(n(17),n(2)),l=n(7),s=n(8),d=n(10),m=n(9),u=n(3),p=n(11),f=(n(1),function(t){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:t.submit},o.a.createElement("input",{type:"text",placeholder:"\u65b0\u589e\u5f85\u8fa6\u4e8b\u9805...",className:"input",value:t.item,onChange:t.addTask,required:!0}),o.a.createElement("input",{type:"submit",value:"+",className:"btn"})))}),h=function(t){var e={textDecoration:t.todo.complete&&"line-through",color:t.todo.complete&&"grey"};return o.a.createElement("div",{className:"box"},o.a.createElement("span",{className:"round"},o.a.createElement("input",{type:"checkbox",id:t.todo.id,onClick:function(){return t.check(t.todo.id)}}),o.a.createElement("label",{htmlFor:t.todo.id})),o.a.createElement("span",{className:"item",style:e},t.todo.title),o.a.createElement("span",{className:"icon",onClick:function(){return t.delete(t.todo.id)}},o.a.createElement("i",{className:"fas fa-trash-alt"})))},v=function(t){return o.a.createElement("div",{className:"todo_list"},t.todo.map((function(e){return o.a.createElement(h,{key:e.id,todo:e,check:function(){return t.check(e.id)},delete:function(){return t.delete(e.id)}})})))},b=n(4),k=n.n(b),E=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(d.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).state={todo:[{id:1,title:"\u5012\u5783\u573e",complete:!0},{id:2,title:"\u8cb7\u83dc",complete:!1}],newItem:""},n.check=function(t){var e=Object(r.a)(n.state.todo),a=e.findIndex((function(e){return e.id===t}));e[a].complete&&k()(Object(u.a)(n)).prop("checked",!0),e[a].complete=!e[a].complete,n.setState({todo:e})},n.delete=function(t){var e=Object(r.a)(n.state.todo).filter((function(e){return e.id!==t}));n.setState({todo:e})},n.addTask=function(t){n.setState({newItem:t.target.value})},n.submit=function(t){t.preventDefault(),n.addToList(n.state.newItem),n.setState({newItem:""})},n.addToList=function(t){if(0===n.trims(t))alert("\u4e0d\u80fd\u8f38\u5165\u7a7a\u767d");else{var e={id:Date.now(),title:t,complete:!1},a=[].concat(Object(r.a)(n.state.todo),[e]);n.setState({todo:a})}},n.trims=function(t){return t.replace(/[ ]/g,"")},n.reset=function(){n.setState({todo:[]})},n.UNSAFE_componentWillUpdate=function(t,e){var n=JSON.stringify(e.todo);localStorage.setItem("name",n)},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"UNSAFE_componentWillMount",value:function(){var t=localStorage.getItem("name");if(t){var e=JSON.parse(t);this.setState({todo:e})}}},{key:"componentDidMount",value:function(){var t=Object(r.a)(this.state.todo).map((function(t){return t.complete&&k()("#".concat(t.id)).prop("checked",!0),t}));this.setState({todo:t})}},{key:"render",value:function(){return o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"title"},"My To Do List"),o.a.createElement(f,{todo:this.state.todo,item:this.state.newItem,addTask:this.addTask,submit:this.submit}),o.a.createElement(v,{todo:this.state.todo,check:this.check,delete:this.delete}),o.a.createElement("button",{className:"rebtn",onClick:this.reset},"Reset"))}}]),e}(a.Component),N=function(){return o.a.createElement("div",{className:"allbg"},o.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.96310c48.chunk.js.map