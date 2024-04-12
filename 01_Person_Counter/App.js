let incrementCounter = document.getElementById("count");
let count = 0;

increment=()=> {
  count = count + 1;
  incrementCounter.innerText = count;
}

save=()=>{
    console.log(count)
}
save();
