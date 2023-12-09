const btn = document.getElementById('btn');
const text = document.getElementById('text');
const box = document.getElementById('box');



btn.addEventListener("click",() => {
  
  if(localStorage.getItem("num")== null){
    let num = 1;
    localStorage.setItem("num",num)
    
    let textvalue= text.value;
    localStorage.setItem(`key${num}`,textvalue)
    
  }else{
    let num = localStorage.getItem("num")
    let newnum = Number(num+1)
    let textvalue= text.value;
    localStorage.setItem("num",newnum)
    localStorage.setItem(`key${newnum}`,textvalue)
  }
 
  let textvalue= text.value;
  listadd(textvalue)

});

function listadd(textvalue){
  
  let hello = document.createElement("p");

  hello.textContent = textvalue;

  box.appendChild(hello);
  
}



window.addEventListener("load",() => {
  
 // localStorage.clear()

if(localStorage.getItem("num")!=null){
  
  
  let num = localStorage.getItem("num");
  
  let numcount = Number(num);
  console.log(num)
  for(i=0;i<= numcount;i++){
     let out =  localStorage.getItem(`key${i}`);
      console.log(out);
      listadd(out)
    
   }
  
  
  }
  
  }
);
  


