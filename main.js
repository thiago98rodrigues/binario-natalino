let bin = document.getElementById("binary")
let dec = document.getElementById("decimal")
let calc = document.getElementById("calc")
let anterioBin = 0
let anterioDec = 0

let lights = "00000000"

bin.addEventListener('keyup', ()=>{
    if(bin.value.match(/^[0-1]{1,8}$/)){
        if((bin.value).length > 1 && (bin.value)[0]=="0"){
           bin.value = bin.value.substring(1)
        }
        anterioBin = bin.value
    }else if(bin.value == ""){
        bin.value = ""
    }else{
        bin.value = anterioBin;
    }
    let result = binToDec(bin.value)
    dec.value = result[0];
    lights = bin.value.padStart(8, '0')
    calc.innerHTML = `toDec(${bin.value}) = ${result[1].substring(2)} = ${result[0]}`
});

dec.addEventListener('keyup', ()=>{
    if(dec.value.match(/^[0-9]{1,3}$/)){
        if((dec.value).length > 1 && (dec.value)[0]=="0"){
           dec.value = dec.value.substring(1)
        }
        if(dec.value > 255){
            dec.value = 255;
        }
        anterioDec = dec.value
    }else if(dec.value == ""){
        dec.value = ""
    }else{
        dec.value = anterioDec;
    }
    let result = decToBin(dec.value);
    bin.value = result[0];
    lights = bin.value.padStart(8, '0')
    calc.innerHTML = `${result[1]} <br><br>= ${result[0]}`
});


function binToDec(number){
    let sum = 0
    let calc = ""
    for(i = number.length; i > 0; i--){    
        sum += parseInt(number[(i-number.length)*(-1)])*(2**(i-1))
        calc += ` + (${number[(i-number.length)*(-1)]}×2) ${String(i-1).sup()}`
    }
    return [sum, calc] 
}

function decToBin(number){
    let sum = ""
    let n = number
    let calc = "" 
    while(parseInt(n) != 0){
        sum = n%2 + sum
        calc += `<br>${n} ÷ 2 = ${Math.trunc(n/2)} (Resto ${n%2})`
        n = Math.trunc(n/2)
        
    }
    return [sum, calc] 
}
