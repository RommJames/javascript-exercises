let container = document.getElementById("container");

let p = document.createElement("p");
p.textContent = "Hey I'm Red";
p.style.color = "red"

let h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3"
h3.style.color = "blue"

let div = document.createElement("div");
div.style["background-color"] = "pink";
div.style["border"] = "2px solid black";

let h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
let pdiv = document.createElement("p");
pdiv.textContent = "ME TOO!"


div.append(h1,pdiv)
container.append(p, h3, div)
