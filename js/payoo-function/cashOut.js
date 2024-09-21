 document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();


    const cashOut = getInputFieldValueById('input-cash-out-money');
    const cashOutPin = getInputFieldValueById('input-cash-out-pin-number');

    if(cashOutPin === 1234){
           const  balance = getTextFieldValueById('account-balance');

           const newBalance = balance - cashOut ;

           document.getElementById('account-balance').innerText = newBalance;
           
    }
    else{
        console.log('no money for you');
    }
 })