let qr = document.querySelector("#qr-code");
let img=document.querySelector("#code-img");
let loader=document.querySelector("#loading");

qr.addEventListener("click",()=>{
  loader.style.display ="block";

  img.onload = function () {
    loader.style.display="none";
  }

  let input = document.querySelector("#input").value;
  let api = `https://api.qrserver.com/v1/create-qr-code/?size-250x250&data=${input}`;
  console.log(input);
  img.src = api;
})
