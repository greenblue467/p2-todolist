(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{1:function(e,t,n){},10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(4),i=n.n(c),r=(n(15),n(2)),l=n(5),s=n(6),d=n(8),u=n(7),m=n(9),f=(n(1),function(e){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:e.submit},o.a.createElement("input",{type:"text",placeholder:"\u65b0\u589e\u5f85\u8fa6\u4e8b\u9805...",className:"input",value:e.item,onChange:e.addTask,required:!0}),o.a.createElement("input",{type:"submit",value:"+",className:"btn"})))}),h=function(e){var t={textDecoration:e.todo.complete&&"line-through",color:e.todo.complete&&"grey"};return o.a.createElement("div",{className:"box"},o.a.createElement("span",{className:"round"},o.a.createElement("input",{type:"checkbox",id:e.todo.id,onClick:function(){return e.check(e.todo.id)}}),o.a.createElement("label",{for:e.todo.id})),o.a.createElement("span",{className:"item",style:t},e.todo.title),o.a.createElement("span",{className:"icon",onClick:function(){return e.delete(e.todo.id)}},o.a.createElement("i",{className:"fas fa-trash-alt"})))},p=function(e){return o.a.createElement("div",null,e.todo.map((function(t){return o.a.createElement(h,{key:t.id,todo:t,check:function(){return e.check(t.id)},delete:function(){return e.delete(t.id)}})})))},b=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={todo:[{id:1,title:"\u5012\u5783\u573e",complete:!1},{id:2,title:"\u8cb7\u83dc",complete:!1}],newItem:""},n.check=function(e){var t=Object(r.a)(n.state.todo),a=t.findIndex((function(t){return t.id==e}));t[a].complete=!t[a].complete,n.setState({todo:t})},n.delete=function(e){var t=Object(r.a)(n.state.todo).filter((function(t){return t.id!=e}));n.setState({todo:t})},n.addTask=function(e){n.setState({newItem:e.target.value})},n.submit=function(e){e.preventDefault(),n.addToList(n.state.newItem),n.setState({newItem:""})},n.addToList=function(e){if(0==n.trims(e))alert("\u4e0d\u80fd\u8f38\u5165\u7a7a\u767d");else{var t={id:Date.now(),title:e,complete:!1},a=[].concat(Object(r.a)(n.state.todo),[t]);n.setState({todo:a})}},n.trims=function(e){return e.replace(/[ ]/g,"")},n.reset=function(){n.setState({todo:[]})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"title"},"My To Do List"),o.a.createElement(f,{todo:this.state.todo,item:this.state.newItem,addTask:this.addTask,submit:this.submit}),o.a.createElement(p,{todo:this.state.todo,check:this.check,delete:this.delete}),o.a.createElement("button",{className:"rebtn",onClick:this.reset},"Reset"))}}]),t}(a.Component),v=function(){return o.a.createElement("div",{className:"allbg"},o.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.0c589c36.chunk.js.map