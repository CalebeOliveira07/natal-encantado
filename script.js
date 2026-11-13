


const produtos = [
  { id: 1, nome: "Árvore de Natal Tradicional", categoria: "Árvores de Natal", preco: 189.90, imagem: "", imagem: "imagens/produto-01.jpg" },
  { id: 2, nome: "Árvore de Natal Nevada", categoria: "Árvores de Natal", preco: 249.90, imagem: "", imagem: "imagens/produto-02.jpg" },
  { id: 3, nome: "Mini Árvore de Natal", categoria: "Árvores de Natal", preco: 49.90, imagem: "", imagem: "imagens/produto-03.jpg" },
  { id: 4, nome: "Árvore de Natal Dourada", categoria: "Árvores de Natal", preco: 219.90, imagem: "", imagem: "imagens/produto-04.jpg" },
  { id: 5, nome: "Árvore de Natal Branca", categoria: "Árvores de Natal", preco: 199.90, imagem: "", imagem: "imagens/produto-05.jpg" },
  { id: 6, nome: "Árvore de Natal com LED", categoria: "Árvores de Natal", preco: 299.90, imagem: "", imagem: "imagens/produto-06.jpg" },
  { id: 7, nome: "Árvore de Natal Decorada", categoria: "Árvores de Natal", preco: 279.90, imagem: "", imagem: "imagens/produto-07.jpg" },
  { id: 8, nome: "Kit de Bolas Natalinas", categoria: "Enfeites", preco: 39.90, imagem: "", imagem: "imagens/produto-08.jpg" },
  { id: 9, nome: "Estrela para Árvore", categoria: "Enfeites", preco: 19.90, imagem: "", imagem: "imagens/produto-09.jpg" },
  { id: 10, nome: "Laços Natalinos", categoria: "Enfeites", preco: 24.90, imagem: "", imagem: "imagens/produto-10.jpg" },
  { id: 11, nome: "Bolas Douradas", categoria: "Enfeites", preco: 34.90, imagem: "", imagem: "imagens/produto-11.jpg" },
  { id: 12, nome: "Bolas Vermelhas", categoria: "Enfeites", preco: 29.90, imagem: "", imagem: "imagens/produto-12.jpg" },
  { id: 13, nome: "Enfeites de Rena", categoria: "Enfeites", preco: 22.90, imagem: "", imagem: "imagens/produto-13.jpg" },
  { id: 14, nome: "Ponteira de Árvore", categoria: "Enfeites", preco: 27.90, imagem: "", imagem: "imagens/produto-14.jpg" },
  { id: 15, nome: "Kit de Enfeites Coloridos", categoria: "Enfeites", preco: 44.90, imagem: "", imagem: "imagens/produto-15.jpg" },
  { id: 16, nome: "Pisca-Pisca Colorido", categoria: "Iluminação", preco: 29.90, imagem: "", imagem: "imagens/produto-16.jpg" },
  { id: 17, nome: "Pisca-Pisca Branco", categoria: "Iluminação", preco: 32.90, imagem: "", imagem: "imagens/produto-17.jpg" },
  { id: 18, nome: "Cortina de LED", categoria: "Iluminação", preco: 59.90, imagem: "", imagem: "imagens/produto-18.jpg" },
  { id: 19, nome: "Mangueira Luminosa", categoria: "Iluminação", preco: 69.90, imagem: "", imagem: "imagens/produto-19.jpg" },
  { id: 20, nome: "Luzes de Estrela", categoria: "Iluminação", preco: 39.90, imagem: "", imagem: "imagens/produto-20.jpg" },
  { id: 21, nome: "Vela LED Decorativa", categoria: "Iluminação", preco: 18.90, imagem: "", imagem: "imagens/produto-21.jpg" },
  { id: 22, nome: "Pisca-Pisca de Cortina", categoria: "Iluminação", preco: 74.90, imagem: "", imagem: "imagens/produto-22.jpg" },
  { id: 23, nome: "Guirlanda Natalina", categoria: "Decoração", preco: 69.90, imagem: "", imagem: "imagens/produto-23.jpg" },
  { id: 24, nome: "Papai Noel Decorativo", categoria: "Decoração", preco: 54.90, imagem: "", imagem: "imagens/produto-24.jpg" },
  { id: 25, nome: "Boneco de Neve", categoria: "Decoração", preco: 42.90, imagem: "", imagem: "imagens/produto-25.jpg" },
  { id: 26, nome: "Rena Decorativa", categoria: "Decoração", preco: 49.90, imagem: "", imagem: "imagens/produto-26.jpg" },
  { id: 27, nome: "Meia de Natal", categoria: "Decoração", preco: 19.90, imagem: "", imagem: "imagens/produto-27.jpg" },
  { id: 28, nome: "Placa Feliz Natal", categoria: "Decoração", preco: 25.90, imagem: "", imagem: "imagens/produto-28.jpg" },
  { id: 29, nome: "Globo de Neve", categoria: "Decoração", preco: 39.90, imagem: "", imagem: "imagens/produto-29.jpg" },
  { id: 30, nome: "Trenó Decorativo", categoria: "Decoração", preco: 59.90, imagem: "", imagem: "imagens/produto-30.jpg" },
  { id: 31, nome: "Mini Papai Noel", categoria: "Decoração", preco: 29.90, imagem: "", imagem: "imagens/produto-31.jpg" },
  { id: 32, nome: "Sino Natalino", categoria: "Decoração", preco: 21.90, imagem: "", imagem: "imagens/produto-32.jpg" },
  { id: 33, nome: "Toalha de Mesa Natalina", categoria: "Mesa natalina", preco: 49.90, imagem: "", imagem: "imagens/produto-33.jpg" },
  { id: 34, nome: "Jogo de Pratos Natalinos", categoria: "Mesa natalina", preco: 89.90, imagem: "", imagem: "imagens/produto-34.jpg" },
  { id: 35, nome: "Guardanapos de Natal", categoria: "Mesa natalina", preco: 19.90, imagem: "", imagem: "imagens/produto-35.jpg" },
  { id: 36, nome: "Caneca Natalina", categoria: "Mesa natalina", preco: 24.90, imagem: "", imagem: "imagens/produto-36.jpg" },
  { id: 37, nome: "Travessa Decorativa", categoria: "Mesa natalina", preco: 39.90, imagem: "", imagem: "imagens/produto-37.jpg" },
  { id: 38, nome: "Centro de Mesa Natalino", categoria: "Mesa natalina", preco: 54.90, imagem: "", imagem: "imagens/produto-38.jpg" },
  { id: 39, nome: "Jogo Americano Natalino", categoria: "Mesa natalina", preco: 34.90, imagem: "", imagem: "imagens/produto-39.jpg" },
  { id: 40, nome: "Presépio Completo", categoria: "Presépios", preco: 119.90, imagem: "", imagem: "imagens/produto-40.jpg" },
  { id: 41, nome: "Presépio de Madeira", categoria: "Presépios", preco: 149.90, imagem: "", imagem: "imagens/produto-41.jpg" },
  { id: 42, nome: "Presépio Pequeno", categoria: "Presépios", preco: 49.90, imagem: "", imagem: "imagens/produto-42.jpg" },
  { id: 43, nome: "Presépio Iluminado", categoria: "Presépios", preco: 169.90, imagem: "", imagem: "imagens/produto-43.jpg" },
  { id: 44, nome: "Presépio Artesanal", categoria: "Presépios", preco: 99.90, imagem: "", imagem: "imagens/produto-44.jpg" },
  { id: 45, nome: "Papel de Presente Natalino", categoria: "Embalagens natalinas", preco: 12.90, imagem: "", imagem: "imagens/produto-45.jpg" },
  { id: 46, nome: "Caixa de Presente Natalina", categoria: "Embalagens natalinas", preco: 18.90, imagem: "", imagem: "imagens/produto-46.jpg" },
  { id: 47, nome: "Sacola de Natal", categoria: "Embalagens natalinas", preco: 9.90, imagem: "", imagem: "imagens/produto-47.jpg" },
  { id: 48, nome: "Fitas Decorativas", categoria: "Embalagens natalinas", preco: 14.90, imagem: "", imagem: "imagens/produto-48.jpg" },
  { id: 49, nome: "Kit de Etiquetas Natalinas", categoria: "Embalagens natalinas", preco: 11.90, imagem: "", imagem: "imagens/produto-49.jpg" },
  { id: 50, nome: "Kit de Embalagens de Natal", categoria: "Embalagens natalinas", preco: 29.90, imagem: "", imagem: "imagens/produto-50.jpg" }
];

const CHAVE_CARRINHO = "carrinhoNatal";

function dinheiro(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function lerCarrinho() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE_CARRINHO)) || [];
  } catch (erro) {
    return [];
  }
}

let carrinho = lerCarrinho();

function salvarCarrinho() {
  localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(carrinho));
}

function adicionarAoCarrinho(id) {
  const encontrado = carrinho.find(item => item.id === id);

  if (encontrado) {
    encontrado.quantidade++;
  } else {
    carrinho.push({ id: id, quantidade: 1 });
  }

  salvarCarrinho();
  atualizarContador();
  alert("Produto adicionado ao carrinho!");
}

function atualizarContador() {
  const contador = document.getElementById("contador-carrinho");

  if (contador) {
    contador.textContent = carrinho.reduce(
      (soma, item) => soma + item.quantidade,
      0
    );
  }
}

function criarCard(produto) {
  return `
    <article class="produto-card">
      <div class="produto-imagem">
        <img
          src="${produto.imagem}"
          alt="${produto.nome}"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='block'"
        >
        <span style="display:none">${produto.emoji}</span>
      </div>

      <div class="produto-info">
        <small>${produto.categoria}</small>
        <h3>${produto.nome}</h3>
        <p class="preco">${dinheiro(produto.preco)}</p>
        <button class="botao" onclick="adicionarAoCarrinho(${produto.id})">
          Adicionar ao carrinho
        </button>
      </div>
    </article>
  `;
}

function mostrarProdutos(lista = produtos) {
  const grade = document.getElementById("grade-produtos");

  if (!grade) return;

  if (lista.length === 0) {
    grade.innerHTML = '<p class="mensagem-vazia">Nenhum produto encontrado.</p>';
    return;
  }

  grade.innerHTML = lista.map(criarCard).join("");
}

function prepararFiltros() {
  const busca = document.getElementById("campo-busca");
  const categoria = document.getElementById("filtro-categoria");

  if (!busca && !categoria) return;

  function filtrar() {
    const termo = busca ? busca.value.toLowerCase().trim() : "";
    const cat = categoria ? categoria.value : "";

    const resultado = produtos.filter(produto => {
      const combinaBusca =
        produto.nome.toLowerCase().includes(termo) ||
        produto.categoria.toLowerCase().includes(termo);

      const combinaCategoria = !cat || produto.categoria === cat;

      return combinaBusca && combinaCategoria;
    });

    mostrarProdutos(resultado);
  }

  if (busca) busca.addEventListener("input", filtrar);
  if (categoria) categoria.addEventListener("change", filtrar);
}

function mostrarCarrinho() {
  const area = document.getElementById("lista-carrinho");
  const totalArea = document.getElementById("total-carrinho");

  if (!area || !totalArea) return;

  if (carrinho.length === 0) {
    area.innerHTML = '<p class="mensagem-vazia">Seu carrinho está vazio.</p>';
    totalArea.textContent = dinheiro(0);
    atualizarContador();
    return;
  }

  let total = 0;

  area.innerHTML = carrinho.map(item => {
    const produto = produtos.find(p => p.id === item.id);

    if (!produto) return "";

    const subtotal = produto.preco * item.quantidade;
    total += subtotal;

    return `
      <div class="linha-carrinho">
        <div class="carrinho-emoji">${produto.emoji}</div>

        <div class="carrinho-detalhes">
          <h3>${produto.nome}</h3>
          <p>${dinheiro(produto.preco)} cada</p>

          <div class="controle-quantidade">
            <button onclick="mudarQuantidade(${produto.id}, -1)">−</button>
            <span>${item.quantidade}</span>
            <button onclick="mudarQuantidade(${produto.id}, 1)">+</button>
          </div>
        </div>

        <strong>${dinheiro(subtotal)}</strong>

        <button class="remover" onclick="removerDoCarrinho(${produto.id})">
          Remover
        </button>
      </div>
    `;
  }).join("");

  totalArea.textContent = dinheiro(total);
  atualizarContador();
}

function mudarQuantidade(id, mudanca) {
  const item = carrinho.find(produto => produto.id === id);

  if (!item) return;

  item.quantidade += mudanca;

  if (item.quantidade <= 0) {
    carrinho = carrinho.filter(produto => produto.id !== id);
  }

  salvarCarrinho();
  mostrarCarrinho();
}

function removerDoCarrinho(id) {
  carrinho = carrinho.filter(item => item.id !== id);

  salvarCarrinho();
  mostrarCarrinho();
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
  }

  alert("Pedido realizado como demonstração! Obrigado por comprar na Natal Encantado.");

  carrinho = [];
  salvarCarrinho();
  mostrarCarrinho();
}

function limparCarrinho() {
  if (carrinho.length > 0 && confirm("Deseja limpar o carrinho?")) {
    carrinho = [];
    salvarCarrinho();
    mostrarCarrinho();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarProdutos();
  prepararFiltros();
  mostrarCarrinho();
  atualizarContador();

  const finalizar = document.getElementById("finalizar-compra");

  if (finalizar) {
    finalizar.addEventListener("click", finalizarCompra);
  }

  const limpar = document.getElementById("limpar-carrinho");

  if (limpar) {
    limpar.addEventListener("click", limparCarrinho);
  }

  const formulario = document.getElementById("form-contato");

  if (formulario) {
    formulario.addEventListener("submit", evento => {
      evento.preventDefault();
      alert("Mensagem enviada com sucesso! Obrigado pelo contato.");
      formulario.reset();
    });
  }
});
