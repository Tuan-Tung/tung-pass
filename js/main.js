function tong() {

function money1(){
    let sl_1 = Number(document.getElementById("sl_1").value);
    let tien1 = sl_1*7000000;
document.getElementById("tien1").innerHTML = tien1;
    return tien1;
}
function money2(){
    let sl_2 = Number(document.getElementById("sl_2").value);
    let tien2 = sl_2*3000000;
    document.getElementById("tien2").innerHTML = tien2;
    return tien2; 
 }
function money3(){
    let sl_3 = Number(document.getElementById("sl_3").value);
    let tien3 = sl_3*6000000;
    document.getElementById("tien3").innerHTML = tien3; 
    return tien3;
 }
    
let sum =document.getElementById("sum").value;
sum = money1()+money2()+money3();
    document.getElementById("sum").innerHTML= sum;
 }
 