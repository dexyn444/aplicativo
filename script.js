const btnSugestoes = document.getElementById("btnSugestoes");
const listaSugestoes = document.getElementById("listaSugestoes");
const listaFinal = document.getElementById("listaFinal");

// Mostrar ou ocultar sugestões
btnSugestoes.addEventListener("click", () => {
  listaSugestoes.classList.toggle("oculto");

  // Atualiza ícone do botão
  if (listaSugestoes.classList.contains("oculto")) {
    btnSugestoes.textContent = "Sugestões ⬇️";
  } else {
    btnSugestoes.textContent = "Sugestões ⬆️";
  }
});

// Adicionar item da sugestão
function adicionarProduto(nome) {
  const li = document.createElement("li");
  li.innerHTML = `
    ${nome}
  `;
  listaFinal.appendChild(li);
}

// Adicionar item manualmente
function adicionarProdutoManual() {
  const input = document.getElementById("inputProduto");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Digite um produto.");
    return;
  }

  adicionarProduto(nome);
  input.value = "";
}

// Remover item
function removerItem(botao) {
  botao.parentElement.remove();
}

function limparLista() {
  if (confirm("Tem certeza que deseja limpar toda a lista?")) {
    listaFinal.innerHTML = "";
  }
}


function adicionarProduto(nome) {
  const li = document.createElement("li");

  // Criar o span com o nome do item
  const span = document.createElement("span");
  span.textContent = nome;

  // Adiciona/remover risco ao clicar no nome
  span.addEventListener("click", () => {
    span.classList.toggle("riscado");
  });

  li.appendChild(span);
  listaFinal.appendChild(li);
}
