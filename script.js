const projetos = [
    {
      nome: "Bloco de Notas compartilhavel",
      link: "http://minhanota.wuaze.com/index.php",
      descricao: "...",
    },
    {
      nome: "Bloco de lista compartilhavel",
      link: "http://minhalita.wuaze.com/index.php",
      descricao: "....",
    },
    {
        nome: "Fofoqueiro Anônimo, site de post anônimo",
        link: "http://devcode.wuaze.com/index.php",
        descricao: "....",
      }
    // Adicione mais projetos aqui
  ];
  
  const container = document.getElementById('projectContainer');
  
  projetos.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-body">
        <h2>${proj.nome}</h2>
        <p>${proj.descricao}</p>
        <a href="${proj.link}" target="_blank">Ver Projeto</a>
      </div>
    `;
    container.appendChild(card);
  });
  
  // Atualizar ano no rodapé
  document.getElementById('year').textContent = new Date().getFullYear();
  