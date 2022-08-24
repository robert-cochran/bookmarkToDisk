//document.body.style.border = "5px solid red";

console.log("Extension loaded")

var e="http://127.0.0.1:6789/home:/focus.md";
console.log(e)
t=new XMLHttpRequest;
console.log(t)
t.open("GET",e);
console.log("open")
t.setRequestHeader("Content-Type","application/json");
console.log("setReqHead")
t.send(JSON.stringify({url:document.location.href}));
console.log("send")


fetch("http://127.0.0.1:6789/home:/dummy.md")
.then(res => {return res.text()})
.then(json => {console.log(json)})



