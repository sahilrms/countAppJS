let dec_btn = document.getElementById('dec');
let inc_btn = document.getElementById('inc');
let count = document.getElementById('count');

dec_btn.addEventListener("click", decreaseCount); 
inc_btn.addEventListener("click", increaseCount);

function decreaseCount(){
    let value=Number(count.innerHTML);
    count.innerHTML=value-1;
}
function increaseCount(){
    let value=Number(count.innerHTML);
    count.innerHTML=value+1;
}