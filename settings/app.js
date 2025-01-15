
let botao = document.getElementById("botao");



botao.addEventListener('click',() => {
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("erro");

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        return regex.test(email);
      }

    
    if (!validarEmail(email)) {
        mensagem.textContent = "Please provide a valid email address";
        
    } else {
        alert("Thank you ;)")
        mensagem.textContent = "";
        

    }

    document.getElementById("email").value = "";
    document.getElementById("email").focus();

} );




