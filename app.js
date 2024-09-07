function pesquisar() {
  // Seleciona a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (campoPesquisa == "") {
    section.innerHTML = "<p>Preencha o campo de pesquisa</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar o HTML dos resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";


  // Itera sobre cada item (dado) no array 'dados'
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) || 
      tags.includes(campoPesquisa)
    ) {
      // Constrói o HTML para cada resultado, formatando o título, descrição e link
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
    }
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
  }

  // Atribui o HTML gerado para a seção, substituindo o conteúdo anterior
  section.innerHTML = resultados;
}
