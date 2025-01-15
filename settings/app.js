document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('botao');
    const email = document.getElementById('email'); //Obtém o valor (string)
    const emailInput = document.getElementById('email'); // Obtém o elemento de entrada
    const mensagem = document.getElementById('erro');




botao.addEventListener('click',() => {
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("erro");

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        return regex.test(email);
      }

    
    if (!validarEmail(email)) {
        mensagem.textContent = "Please provide a valid email address";
        emailInput.style.border = '2px solid #ff5263 ';
       


       
        
        
    } else {
        alert("Thank you ;)")
        mensagem.textContent = "";
        emailInput.style.border = '';
        

    }

    emailInput.value = '';
    emailInput.focus();

} );
});




