console.log('mic check 1, 2, 1, 2');

// function Prefixer(prefix){
//     this.prefix = prefix;
// }

// Prefixer.prototype.prefixArray = function(arr){
//     let that = this;
//     return arr.map(function(x){
//         console.log(that.prefix + x);
//     });
// }

// let pre = new Prefixer('Hello ');
// pre.prefixArray(['Brad', 'Jeff']);



// function Prefixer(prefix){
//     this.prefix = prefix;
// }

// Prefixer.prototype.prefixArray = function(arr){
//     return arr.map((x) => {
//         console.log(this.prefix + x);
//     });
// }

// let pre = new Prefixer('Hello ');
// pre.prefixArray(['Brad', 'Jeff']);


// let add = function(a,b){
//     let sum = a+b;
//     console.log(sum);
//     return false
// }

// let add = (a,b) => {
//     let sum = a+b;
//     console.log(sum);
//     return false
// }

// add(10,2);



// we need a few different arrow functions; on-click, onmouseover, onmouseout


document.getElementById("button").onclick = function() {
    setBackgroundColorById("paragraph", "blue");
}
document.getElementById("alert").onclick = function(){
    alert(document.getElementById("popup-input").value);
}
document.getElementById("hover-this").onmouseover = function(){
    setBackgroundColorById("body", "red");
}
document.getElementById("hover-this").onmouseout = function(){
    setBackgroundColorById("body", "white");
}
function getValueFromId(id){
    return document.getElementById(id).value;
}
function setBackgroundColorById(id, color){
    document.getElementById(id).style = "background-color: " + color;
}
function mouseOverFunction(el){
    el.style = "background-color: black";
}

