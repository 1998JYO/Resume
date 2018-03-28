//Ajax call(HXMLHttpRequest) intiation
function loadjson(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange =function() {
    if (xhr.readyState === 4 && xhr.status =="200") {
      callback(xhr.responseText);

    }
  }
  xhr.send();
}
// function calling
loadjson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  //creating constuctor basics
  basics(data.left);
})
// from main div class calling
//var main=document.queryselection('.main');
//for main div id calling
var main=document.getElementById('main');
var left=document.createElement("div");
// add class name to element
left.classList.add("left");
// adding text to div
left.textContent="profile Details"
left.appendChild(document.createElement("HR"));
//add id to element
// left.setAttribute("id","left");
// appending to main
main.appendChild(left);
// calling functionbasics
function   basics(leftside){

var image=document.createElement("img");
image.src=leftside.photo;
left.appendChild(image);
var name=document.createElement("h1");
name.textContent=leftside.name;
left.appendChild(name);
var email=document.createElement("h2");
email.textContent=leftside.email;
left.appendChild(email);
var ph=document.createElement("p");
ph.textContent=leftside.phone;
left.appendChild(ph);
console.log(left);
}
