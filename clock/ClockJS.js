let [hours ,milisecs ,seconds,minutes]= [0,0,0,0];
let timerRef = document.getElementById("timeDisplay");
let int = null;
var timer;

document.getElementById('startTimer').addEventListener('click',()=>{
    if(int!==null){
    clearInterval(int);
    }
    int = setInterval(displayTimer,10);
  });

document.getElementById('pauseTimer').addEventListener('click', ()=>{
  clearInterval(int);
});
 document.getElementById('resetTimer').addEventListener('click', ()=>{
  clearInterval(int);
  [milisecs ,seconds,minutes] = [0,0,0];
  timerRef.innerHTML = '00 : 00 : 00';
   lplist.innerHTML="";
 });

function displayTimer(){
  milisecs+=10;
  if(milisecs ==1000){
    milisecs=0;
    seconds++;
  if(seconds ==60){
    seconds=0;
    minutes++;
  if(minutes ==60){
      minutes=0;
      hours++;
    }
   }
  }
  let h = hours <10 ? "0" + hours : hours;
  let m = minutes <10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" +seconds : seconds;
 let ms= milisecs<10 ? "00" + milisecs : milisecs;
 milisecs<100 ? "0" + milisecs : milisecs;
 var a= timerRef.innerText = `${h} : ${m} : ${s} : ${ms}`;
}

let i=0;
let lplist =document.getElementById("list");
function lapr(){
   let ls = document.createElement("li");
   let div1=document.createElement("div");
   let div2=document.createElement("div");
   let laph="";
   let lapm="";
   let laps="";
   let lapms="";
  if(hours<10){
  laph="0"+minutes;
   }
   else{
    laph=minutes;
   }
   if(minutes<10){
    lapm="0"+minutes;
   }else{
    lapm=minutes;
   }
   if (seconds<10) {
    laps="0"+seconds;
   }else{
    laps=seconds;
   }
   if(milisecs<10){
    lapms="0"+milisecs;
   }else{
    lapms=milisecs;
   }

   div1.innerHTML="LAP:"+(++i);
   div2.innerHTML= laph+":"+lapm+":"+laps+":"+lapms;
    lplist.appendChild(ls);
    ls.appendChild(div1);
    ls.appendChild(div2);
   console.log(ls);
   }
