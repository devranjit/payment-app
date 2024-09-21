document.getElementById('btn-add-money').addEventListener('click', function(event){
event.preventDefault();


const addedMoney =  document.getElementById('input-add-money').value;

const pinNumber =  document.getElementById('input-pin-number').value;


if(pinNumber === '1234'){

    const balance = document.getElementById('current-balance').innerText;

    const balanceNumber = parseFloat(balance);

    const newMoney = parseFloat(addedMoney);

    const finalBalance = balanceNumber + newMoney ;

     document.getElementById('current-balance').innerText = finalBalance;



}

else{
    console.log("something is wrong , please try again later ");
}





})