let dec_btn = document.getElementById('dec');
let inc_btn = document.getElementById('inc');
let reset_btn = document.getElementById('reset');
let count = document.getElementById('count');

dec_btn.addEventListener("click", decreaseCount); 
inc_btn.addEventListener("click", increaseCount);
reset_btn.addEventListener("click",resetCount);

function decreaseCount(){
    let value=Number(count.innerHTML);
    count.innerHTML=value-1;
}
function increaseCount(){
    let value=Number(count.innerHTML);
    count.innerHTML=value+1;
}

function resetCount(){
    let value=Number(count.innerHTML);
    count.innerHTML=1;
}