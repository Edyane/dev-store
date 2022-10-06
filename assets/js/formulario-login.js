
// Validação do Email
function validationEmail() {
    const message = document.getElementById("msg_email");
  
    const borderValidEmail = document.querySelector(".email");
    const inputEmail = document.querySelector(".email").value;
    const patternEmail = /^\w+@(\w+\.)+\w{2,4}$/;
    const maxCaracterEmail = 65;
  
    let validation = false;
  
    if (!inputEmail) {
      borderValidEmail.style.borderColor = "red";
      message.innerHTML = "Este campo não pode estar vazio.";
      validation;
    } else {
      if (inputEmail.length > maxCaracterEmail) {
        borderValidEmail.style.borderColor = "red";
        message.innerHTML = "Apenas 65 caracteres são permitidos neste campo.";
        validation;
      } else {
        if (!patternEmail.test(inputEmail)) {
          borderValidEmail.style.borderColor = "red";
          message.innerHTML = "Email invalida.";
        } else {
          borderValidEmail.style.borderColor = "green";
          message.innerHTML = "";
          validation = true;
        }
      }
    }
    return validation;
  }

//Validação da Senha
function validationSenha() {
    const message = document.getElementById("msg_senha");

    const borderValidSenha = document.querySelector(".senha");
    const inputSenha = document.querySelector(".senha").value;
    const patternSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    const minCaracterSenha = 8;
    const maxCaracterSenha = 20;

    let validation = false;

    if (!inputSenha) {
        borderValidSenha.style.borderColor = "red";
        message.innerHTML = "Este campo não pode estar vazio.";
        validation;
    } else {
        if (inputSenha.length < minCaracterSenha) {
            borderValidSenha.style.borderColor = "red";
            message.innerHTML = "Minimo 8 caracteres neste campo.";
            validation;
        } else if (inputSenha.length > maxCaracterSenha) {
            borderValidSenha.style.borderColor = "red";
            message.innerHTML = "Apenas 20 caracteres são permitidos neste campo.";
            validation;
        } else if (!patternSenha.test(inputSenha)) {
            borderValidSenha.style.borderColor = "red";
            message.innerHTML = "Senha invalida.";
        } else {
            borderValidSenha.style.borderColor = "green";
            message.innerHTML = "";
            validation = true;
        }   
    }
    return validation;
}
        
// Verificação do formulário
function verification_login() {
    const validEmail = validationEmail();
    const validSenha = validationSenha();

    if (!validEmail) {
        alert('O campo "email" não é válido.');
    } else if (!validSenha) {
        alert('O campo "senha" não é válido.');
    } else {
        // alert("Enviado com sucesso.");
        // location.href = "http://assets/html/adiciona-produto.html";
        // location.href = "http://127.0.0.1:5500/assets/html/adiciona-produto.html";
        location.href = "https://vladoxx.github.io/alura-oracle_challenge_04_e-commerce/assets/html/adiciona-produto.html";
    }
}