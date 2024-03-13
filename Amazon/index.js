const img= document.querySelectorAll('.headerslider ul img');
const PreButtn= document.querySelector('.controlPrev');
const NextButtn= document.querySelector('.controlNext');
 let n=0;
 function changeslide(){
  for(let i=0; i<img.length;i++){
    img[i].style.display="none";

  }
  img[n].style.display="block";
 }
 changeslide();
 PreButtn.addEventListener('click', (e)=>{
  if(n>0){
    n--;
  }
  else{
    n= img.length-1;
  }
  changeslide();
 })
 NextButtn.addEventListener('click', (e)=>{
  if(n<img.length-1){
    n++;
  }
  else{
    n= 0;
  }
  changeslide();
 })


//  slider
 const ScrollContainer=document.querySelectorAll(".products");
for(const item of ScrollContainer){
  item.addEventListener('wheel',(evt)=>{
    evt.preventDefault();
    item.scrollLeft+=evt.deltaY;
  })
}