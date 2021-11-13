var LOOP = document.querySelector(".box");
LOOP.innerHTML = "";

for(var i=-40; i<0; i++)
{
var DNA = document.createElement("span");

  DNA.style.setProperty('--n', i);
LOOP.appendChild(DNA);
  var Dot = document.createElement("d");
 Dot.style.setProperty('--n', i);
LOOP.appendChild(Dot); 

}
  