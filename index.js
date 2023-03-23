//fetch("https://api.currencyapi.com/v3/latest?apikey=Reg9DxkOK1RLzQAnPb67J1yHYidun8B6QbWVp7vt").then((response)=>{return response.json();}).
//then((object) => {console.log(object['data']['ADA']['value'])});
let rates;
let selected1;
let selected2;
document.getElementById('button').onclick=convert;
async function getdata(){
    response = await fetch("https://api.currencyapi.com/v3/latest?apikey=Reg9DxkOK1RLzQAnPb67J1yHYidun8B6QbWVp7vt");
    DATA = await response.json();
    rates = DATA;
    currencies = Object.keys(DATA.data);
    //console.log(DATA.data)
    let sourcelist = document.getElementsByClassName("currency");

    for(let i=0;i<currencies.length;i++){
        let newOption = document.createElement("option");
        newOption.value = currencies[i];
        newOption.text  = currencies[i];
        sourcelist[0].appendChild(newOption);
        sourcelist[1].appendChild(newOption.cloneNode(true));
    }

    return
}

getdata()

function convert(){
let result = document.querySelector('.result');
let selected1 = document.getElementsByClassName("currency")[0].value;
let selected2=document.getElementsByClassName("currency")[1].value;
let source = rates.data[selected1]['value'];
let target = rates.data[selected2]['value']

result= target * (1/source);
console.log(result);
document.querySelector(".result").innerHTML=result.toFixed(2);
}



