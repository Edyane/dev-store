// Validação do Formulário - Contato
// Validaçao do Nome
function validationName() {
    const message = document.getElementById("msg_name");
  
    const borderValidName = document.getElementById("name");
    const inputName = document.getElementById("name").value;
    const maxCaracterName = 40;
    const patternName = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
  
    let validation = false;
  
    if (!inputName) {
      borderValidName.style.borderColor = "red";
      message.innerHTML = "Este campo não pode estar vazio.";
      validation;
    } else {
      if (inputName.length > maxCaracterName) {
        borderValidName.style.borderColor = "red";
        message.innerHTML = "Apenas 40 caracteres são permitidos neste campo.";
        validation;
      } else {
        if (!patternName.test(inputName) && inputName) {
          borderValidName.style.borderColor = "red";
          message.innerHTML = "Somente letras.";
        } else {
          borderValidName.style.borderColor = "green";
          message.innerHTML = "";
          validation = true;
        }
      }
    }
    return validation;
  }

  // Validaçao da Messagem
function validationTextarea() {
    const message = document.getElementById("msg_textarea");
  
    const borderValidTextarea = document.getElementById("textarea");
    const inputTextarea = document.getElementById("textarea").value;
    const minCaracterTextarea = 15;
    const maxCaracterTextarea = 120;
  
    let validation = false;
  
    if (!inputTextarea) {
      borderValidTextarea.style.borderColor = "red";
      message.innerHTML = "Este campo não pode estar vazio.";
      validation;
    } else {
      if (inputTextarea.length < minCaracterTextarea) {
        borderValidTextarea.style.borderColor = "red";
        message.innerHTML = "Minimo 15 caracteres neste campo.";
        validation;
      } else if (inputTextarea.length >= maxCaracterTextarea) {
        borderValidTextarea.style.borderColor = "red";
        message.innerHTML = "Limite de 120 caracteres neste campo.";
        validation;
      } else {
        borderValidTextarea.style.borderColor = "green";
        message.innerHTML = "";
        validation = true;
      }
    }
    return validation;
  }
  
  // Verificação do formulário
  function verification() {

    const validName = validationName();
    const validTextarea = validationTextarea();
  
    if (!validName) {
      alert('O campo "nome" não é válido.');
    } else if (!validTextarea) {
      alert('O campo "messagem" não é válido.');
    } else {
      alert("Enviado com sucesso.");
      document.querySelector('.form').reset();
    }
  }