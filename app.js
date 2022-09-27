let binaryNum = document.getElementById("binary");

let btn = document.getElementsByClassName("btn")[0];

let result = document.getElementsByClassName("result")[0];

// console.log(binaryNum.value)

btn.addEventListener("click",(e)=>{
    const regEx = /^[0-1]+$/
    if(!binaryNum.value.match(regEx)){
        alert("Enter binary number");
    }else{
        e.preventDefault();
        let digit = parseInt(binaryNum.value, 2);
        result.innerHTML = `Decimal number: ${digit}`;
    }
})
