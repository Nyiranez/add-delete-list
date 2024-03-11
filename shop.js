let btn=document.querySelectorAll(".click");

for(let i=0; i<btn.length; i++){
  btn[i].addEventListener("click", function(e){
    let prev=document.querySelector(".click.me");
    if(prev){
        prev.classList.remove("me");
    }
    e.target.classList.add("me");
  
  });
}


let candidate=document.querySelector(".candidate");
let add=document.querySelector(".add");
let ul=document.querySelector(".ul-list");

 add.addEventListener("click", function(e){
  if(candidate.value!= ""){
    e.preventDefault();

    let li=document.createElement("li");
  li.innerHTML=candidate.value;
  ul.appendChild(li);

  let close= document.createElement('span'); 
  close.innerHTML="x"
  li.appendChild(close);
  }

  let cancel=document.querySelectorAll("span");
  for(let i=0; i<cancel.length; i++){
   cancel[i].addEventListener("click", function(){
     cancel[i].parentElement.style.display="none";
   });
  
  }
  candidate.value= "";

 });

 
