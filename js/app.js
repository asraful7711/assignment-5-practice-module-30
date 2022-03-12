function getInput(id){
    const inputFeild = document.getElementById(id);
    const InputValue = inputFeild.value ;
    const InputParse = parseFloat(InputValue);
    //   error handaling
    if (inputFeild.value == '') {

        document.getElementById(id+'-fillup').style.display = 'block';

    }
    else if (inputFeild.value >= 0){
        document.getElementById(id + '-error').style.display = 'none';
        document.getElementById(id + '-fillup').style.display = 'none';
    }
    else{
        document.getElementById(id + '-error').style.display = 'block';
        document.getElementById(id + '-fillup').style.display = 'none';
    }
    return InputParse;
}

// calculate total button 

document.getElementById('calculate-total').addEventListener('click',function(){

    const income = getInput('input-income');

    const food =  getInput('food-input');
    
    const rent =  getInput('rent-input');

    const cloth =  getInput('cloth-input');

    
    const totalExpensesFeild = document.getElementById('total-expenses')
    const expensesInnerText = totalExpensesFeild.innerText
    const expensesParse = parseFloat(expensesInnerText);
    const totalExpenses = food + rent + cloth;

    const balanceInput = document.getElementById('input-balance');

   //   error handaling
    if (isNaN(totalExpenses) == true){
        totalExpensesFeild.innerText = '00';
        balanceInput.innerText = '00';

    }
    else if (totalExpenses > income){
        alert('insufficiant balance')

    }
    else {
        totalExpensesFeild.innerText = totalExpenses;
        balanceInput.innerText = income - totalExpenses;
    }
    

    
})

// savings button 

document.getElementById('calculate-saving').addEventListener('click', function(){

    const savingsInput = getInput('save-input');
    const income = getInput('input-income');

    const savingAmount = document.getElementById('saving-amount');
    const balanceInput = document.getElementById('input-balance');
    const remainingBalance = document.getElementById('remaining-balance');
    //   error handaling
    if ( isNaN(savingsInput) == false){

    savingAmount.innerText = income * savingsInput / 100;
    remainingBalance.innerText = balanceInput.innerText - savingAmount.innerText;

    }
    else{
        savingAmount.innerText = '00'
        remainingBalance.innerText = '00' 
    }   

})