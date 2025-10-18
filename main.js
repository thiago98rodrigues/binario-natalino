let bin = document.getElementById("binary")
let dec = document.getElementById("decimal")
let anterioBin = 0
let anterioDec = 0

let lights = "00000000"

bin.addEventListener('keyup', ()=>{
    if(bin.value.match(/^[0-1]{1,8}$/)){
        if((bin.value).length > 1 && (bin.value)[0]=="0"){
           bin.value = bin.value.substring(1)
        }
        anterioBin = bin.value
    }else{
        bin.value = anterioBin;
    }
    dec.value = binToDec(bin.value);
    lights = bin.value.padStart(8, '0')
    console.log(lights)
});

dec.addEventListener('keyup', ()=>{
    if(dec.value.match(/^[0-9]{1,3}$/)){
        if(dec.value > 225){
            dec.value = 225;
        }
        anterioDec = dec.value
    }else{
        dec.value = anterioDec;
    }
    bin.value = decToBin(bin.value);
});


function binToDec(number){
    let sum = 0
    for(i = number.length; i > 0; i--){    
        sum += parseInt(number[(i-number.length)*(-1)])*(2**(i-1))
    }
    return sum 
}
