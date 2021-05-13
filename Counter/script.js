const btn = document.getElementsByClassName("btn");
//console.log("we are going correct",btn);
let number = document.querySelector(".number");
let i=0;
btn[0].addEventListener("click",function(){
  //console.log(btn[0]);
  number.textContent = --i;
  clr();
})
btn[1].addEventListener("click",function(){
  i=0;
  //console.log(btn[1]);
  number.textContent = i;
  clr();
})
btn[2].addEventListener("click",function(){
  //console.log(btn[2]);
  number.textContent = ++i;
  clr();
  
})

function clr(){
  
if(i<0){
  number.style.color = "red";
}
else if(i>0){
  number.style.color = "green";
}
else{
  number.style.color = "black";
}

}