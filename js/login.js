// step1 get click event handler with submit button 
document.getElementById('button_field').addEventListener('click',function(){
    // step2 get email adress imnside email address field 
    // always remeber to use .value to get text from an input field 
    const emailField = document.getElementById('email_field');
    const email = emailField.value;
    // step3 ste password 
    const passwordField = document.getElementById('password_field');
    const passwords = passwordField.value;
    console.log(email,passwords);
    // varify valid user 
    if(email == 'sontan@gmail.com' && passwords == '32515'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Tui password vule gesos!!!')
    }
})