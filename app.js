//Add Event Listener
document.getElementById('form').addEventListener('submit', function(e){

    //Hide Results
    document.getElementById('results').style.display = 'none';

    //Show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout (calculateResults, 3000);
    
 e.preventDefault();
    
});

function calculateResults(){
    
    //UI Elements
   amount = document.getElementById('amount');
   interest = document.getElementById('interest');
   years = document.getElementById('years');
   monthlyPayment = document.getElementById('monthly-payment');
   totalPayment = document.getElementById('total-payment');
   totalInterest = document.getElementById('total-interest');


   const principal = parseFloat(amount.value);
   const calculatedInterest = parseFloat(interest.value) /100 /12;
   const calculatedPayment = parseFloat(years.value)* 12;

   //Monthly Payments
   const x = Math.pow(1 + calculatedInterest, calculatedPayment);
   const monthly = (principal * x * calculatedInterest)/ (x-1);

   if(isFinite(monthly)) {
       monthlyPayment.value = monthly.toFixed(2);
       totalPayment.value = (monthly*calculatedPayment).toFixed(2);
       totalInterest.value = ((monthly*calculatedPayment) - principal).toFixed(2);    

       //Show Result
       document.getElementById('results').style.display = 'block';

       //Hide Loader
       document.getElementById('loading').style.display = 'none';

   }else {
      showError('Please check your number');
   }  

}

function showError (){

    //Hide Result
    document.getElementById('results').style.display = 'none';

     //Hide Loader
    document.getElementById('loading').style.display = 'none';

   
    document.getElementById('error').style.display = 'block';

    setTimeout (showError, 3000);
    
}