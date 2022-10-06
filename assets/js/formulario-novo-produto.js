// Validação do envio da imagem e URL do produto novo
// Previsualização d imagem
// Obter referencia do input e a imagem
const arquivo = document.querySelector("#arquivo");
const previsualizacao = document.querySelector("#previsualizacao");
const deletarImagem = document.querySelector(".delete_imagem");

// Escutar quando mude
arquivo.addEventListener("change", () => {
  const arquivos = arquivo.files;
  // Se não existem arquivos saimos da funcão
  if (!arquivos || !arquivos.length) {
    previsualizacao.src = "";
    return;
  }
  // Agora temos o arquivo
  const primerArchivo = arquivos[0];
  // Fazemos um objeto de tipo objectURL
  const objectURL = URL.createObjectURL(primerArchivo);
  previsualizacao.style.display = "block";
  deletarImagem.style.display = "block";
  previsualizacao.src = objectURL;
});

// Botão para deletar a imagem carregada no formulário
deletarImagem.addEventListener("click", () => {
  previsualizacao.src = "";
  deletarImagem.style.display = "none";
});

// Validação da URL do produto novo
function verificando_URL() {
  const message = document.querySelector("#msg_url_imagem");

  const borderValid_URL = document.querySelector("#url_imagem");
  const input_URL = document.querySelector("#url_imagem").value;
  const maxCaracterName = 200;
  const patternName = /^(ftp|http|https):\/\/[^ "]+$/;

  let validation = false;

  if (!input_URL) {
    borderValid_URL.style.borderColor = "red";
    message.innerHTML = "Este campo não pode estar vazio.";
    validation;
  } else {
    if (input_URL.length > maxCaracterName) {
      borderValid_URL.style.borderColor = "red";
      message.innerHTML = "Apenas 200 caracteres são permitidos neste campo.";
      validation;
    } else {
      if (!patternName.test(input_URL) && input_URL) {
        borderValid_URL.style.borderColor = "red";
        message.innerHTML = "A URL está incompleta ou não é valida.";
      } else {
        borderValid_URL.style.borderColor = "green";
        message.innerHTML = "";
        validation = true;
      }
    }
  }
  return validation;
}

// Validação da Categoria
function verificando_categoria() {
  const message = document.querySelector("#msg_categoria");

  const borderValidNameCategory = document.querySelector("#categoria");
  const inputCategory = document.querySelector("#categoria").value;
  const maxCaracterNameCategory = 20;
  const patternName =
    /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

  let validation = false;

  if (!inputCategory) {
    borderValidNameCategory.style.borderColor = "red";
    message.innerHTML = "Este campo não pode estar vazio.";
    validation;
  } else {
    if (inputCategory.length > maxCaracterNameCategory) {
      borderValidNameCategory.style.borderColor = "red";
      message.innerHTML = "Apenas 20 caracteres são permitidos neste campo.";
      validation;
    } else {
      if (!patternName.test(inputCategory) && inputCategory) {
        borderValidNameCategory.style.borderColor = "red";
        message.innerHTML = "Somente letras.";
      } else {
        borderValidNameCategory.style.borderColor = "green";
        message.innerHTML = "";
        validation = true;
      }
    }
  }
  return validation;
}

// Validação do Nome do Produto
function verificacao_produto_novo() {
  const message = document.querySelector("#msg_produto_novo");

  const borderValidName = document.querySelector("#nome_produto");
  const inputName = document.querySelector("#nome_produto").value;
  const maxCaracterName = 20;
  const patternName =
    /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

  let validation = false;

  if (!inputName) {
    borderValidName.style.borderColor = "red";
    message.innerHTML = "Este campo não pode estar vazio.";
    validation;
  } else {
    if (inputName.length > maxCaracterName) {
      borderValidName.style.borderColor = "red";
      message.innerHTML = "Apenas 20 caracteres são permitidos neste campo.";
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

// Validação do Preço do produto
// function moneda (i) {

//   var valor = i.value.replace(/\D/g,'');
//   valor = (valor/100).toFixed(2) + '';
//   valor = valor.replace(".", ",");
//   valor = valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, 'R$1.');
//   i.value = valor;

// }
// Valor R$ <input onkeyup="moneda(this);" /><br/>
// Valor R$ <input onkeyup="moneda(this);" /><br/>
// Valor R$ <input onkeyup="moneda(this);" /><br/>

// console.log(moneda(121123));


// function verificacao_produto_novo() {
//   const message = document.querySelector("#msg_produto_novo");

//   const borderValidName = document.querySelector("#nome_produto");
//   const inputName = document.querySelector("#nome_produto").value;
//   const maxCaracterName = 20;
//   const patternName = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

//   let validation = false;

//   if (!inputName) {
//     borderValidName.style.borderColor = "red";
//     message.innerHTML = "Este campo não pode estar vazio.";
//     validation;
//   } else {
//     if (inputName.length > maxCaracterName) {
//       borderValidName.style.borderColor = "red";
//       message.innerHTML = "Apenas 20 caracteres são permitidos neste campo.";
//       validation;
//     } else {
//       if (!patternName.test(inputName) && inputName) {
//         borderValidName.style.borderColor = "red";
//         message.innerHTML = "Somente letras.";
//       } else {
//         borderValidName.style.borderColor = "green";
//         message.innerHTML = "";
//         validation = true;
//       }
//     }
//   }
//   return validation;
// }

// Validaçao da Messagem
function validacao_textarea() {
  const message = document.querySelector("#msg_descricao");

  const borderValidTextarea = document.querySelector("#textarea_produto");
  const inputTextarea = document.querySelector("#textarea_produto").value;
  const minCaracterTextarea = 5;
  const maxCaracterTextarea = 150;

  let validation = false;

  if (!inputTextarea) {
    borderValidTextarea.style.borderColor = "red";
    message.innerHTML = "Este campo não pode estar vazio.";
    validation;
  } else {
    if (inputTextarea.length < minCaracterTextarea) {
      borderValidTextarea.style.borderColor = "red";
      message.innerHTML = "Minimo 5 caracteres neste campo.";
      validation;
    } else if (inputTextarea.length >= maxCaracterTextarea) {
      borderValidTextarea.style.borderColor = "red";
      message.innerHTML = "Limite de 150 caracteres neste campo.";
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
function verificacao_produto() {

  const valid_URL_name = verificando_URL();
  const validNameCategoryProduct = verificando_categoria();
  const validNameProduct = verificacao_produto_novo();
  const validTextareaProduct = validacao_textarea();

  // Hacer validación de elección entre la imagen o la URL para poder enviar el formulario

  if (!valid_URL_name) {
    alert('A "URL" não é válida.')
  } else if (!validNameCategoryProduct) {
    alert('O campo "categoria" não é válido.');
  } else if (!validNameProduct) {
    alert('O campo "nome do produto" não é válido.');
  } else if (!validTextareaProduct) {
    alert('O campo "descrição" não é válido.');
  } else {
    alert("Enviado com sucesso.");
    document.querySelector(".adicionar-produto").reset();
  }
}
