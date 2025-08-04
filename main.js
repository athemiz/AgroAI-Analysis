$(document).ready(function () {
  // Preenche a tabela de concorrentes com coluna de financiamento
  const headers = ['Nome', 'Proposta de valor', 'Pontos fortes', 'Pontos fracos / gaps', 'Modelo de pricing', 'Distribuição & tração', 'Financiamento/Escala'];
  const table = $('#competitors');
  table.append('<thead><tr>' + headers.map(h => `<th>${h}</th>`).join('') + '</tr></thead>');
  const tbody = $('<tbody></tbody>');
  competitors.forEach(c => {
    tbody.append(
      `<tr>
        <td><strong>${c.nome}</strong></td>
        <td>${c.proposta}</td>
        <td>${c.pontosFortes}</td>
        <td>${c.pontosFracos}</td>
        <td>${c.pricing}</td>
        <td>${c.distribuicao}</td>
        <td>${c.financiamento}</td>
      </tr>`
    );
  });
  table.append(tbody);
  table.DataTable({ 
    paging: false, 
    searching: true,
    scrollX: true,
    responsive: true,
    columnDefs: [
      { width: "15%", targets: 0 },
      { width: "20%", targets: 1 },
      { width: "15%", targets: 2 },
      { width: "15%", targets: 3 },
      { width: "10%", targets: 4 },
      { width: "15%", targets: 5 },
      { width: "10%", targets: 6 }
    ]
  });

  // Gráfico de mercado
  const ctx = document.getElementById('marketChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: mercado.labels,
      datasets: [{
        label: mercado.descricao,
        data: mercado.valores,
        backgroundColor: ['#4caf50', '#2196f3', '#ff9800']
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Milhões de usuários'
          }
        }
      }
    }
  });

  // Tabela de modelos de monetização
  const pricingHeaders = ['Modelo', 'Vantagens', 'Desvantagens / riscos', 'Elasticidade e margens'];
  const pricingTable = $('#pricing');
  pricingTable.append('<thead><tr>' + pricingHeaders.map(h => `<th>${h}</th>`).join('') + '</tr></thead>');
  const pricingBody = $('<tbody></tbody>');
  pricingModels.forEach(p => {
    pricingBody.append(
      `<tr>
        <td>${p.modelo}</td>
        <td>${p.vantagens}</td>
        <td>${p.desvantagens}</td>
        <td>${p.elasticidade}</td>
      </tr>`
    );
  });
  pricingTable.append(pricingBody);
  pricingTable.DataTable({ paging: false, searching: false });

  // Implementa os segmentos prioritários
  const segmentsContainer = $('#segments-container');
  segmentosPrioritarios.forEach(s => {
    segmentsContainer.append(`
      <div class="segment-card">
        <h3>🌾 ${s.segmento}</h3>
        <p><strong>Descrição:</strong> ${s.descricao}</p>
        <p><strong>Problemas:</strong> ${s.problemas}</p>
        <p><strong>Mercado:</strong> ${s.mercado}</p>
      </div>
    `);
  });

  // Gráfico de conectividade rural
  const ctxConnectivity = document.getElementById('connectivityChart').getContext('2d');
  new Chart(ctxConnectivity, {
    type: 'line',
    data: {
      labels: ['2017', '2025 (Estimativa)'],
      datasets: [{
        label: 'Conectividade Rural (%)',
        data: [dadosConectividade.conectividadeRural2017, dadosConectividade.conectividadeRural2025],
        borderColor: '#5cb85c',
        backgroundColor: 'rgba(92, 184, 92, 0.1)',
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: 'Percentual de Conectividade (%)'
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Evolução da Conectividade Rural no Brasil'
        }
      }
    }
  });

  // Matriz SWOT
  const swotDiv = $('#swot-container');
  const swotMap = {
    strengths: '💪 Forças',
    weaknesses: '⚠️ Fraquezas',
    opportunities: '🚀 Oportunidades',
    threats: '⚡ Ameaças'
  };
  Object.keys(swotMap).forEach(key => {
    const col = $('<div class="swot-col"></div>');
    col.append(`<h3>${swotMap[key]}</h3>`);
    const list = $('<ul></ul>');
    swot[key].forEach(item => list.append(`<li>${item}</li>`));
    col.append(list);
    swotDiv.append(col);
  });

  // Benchmarks
  const successList = $('#bench-success');
  benchmarks.sucesso.forEach(b => successList.append(`<li><strong>${b.nome}:</strong> ${b.licao}</li>`));
  const failureList = $('#bench-failure');
  benchmarks.fracasso.forEach(b => failureList.append(`<li><strong>${b.nome}:</strong> ${b.licao}</li>`));

  // Red flags
  const redTable = $('#redflags');
  redTable.append('<thead><tr><th>Risco</th><th>Mitigação</th></tr></thead>');
  const redBody = $('<tbody></tbody>');
  redFlags.forEach(r => {
    redBody.append(`<tr><td>${r.risco}</td><td>${r.mitigacao}</td></tr>`);
  });
  redTable.append(redBody);
  redTable.DataTable({ paging: false, searching: false });

  // Experimentos
  const expList = $('#experiments');
  experimentos.forEach(e => expList.append(`<li>${e}</li>`));

  // Gráfico de crescimento
  const ctxGrowth = document.getElementById('growthChart').getContext('2d');
  new Chart(ctxGrowth, {
    type: 'line',
    data: {
      labels: crescimentoIA.labels,
      datasets: [{
        label: crescimentoIA.descricao,
        data: crescimentoIA.valores,
        borderColor: '#4caf50',
        backgroundColor: 'rgba(76, 175, 80, 0.1)',
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'US$ bilhões'
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Projeção do Mercado Global de IA na Agricultura (CAGR 26,3%)'
        }
      }
    }
  });

  // Implementa a recomendação final
  const recommendationContainer = $('#recommendation-container');
  recommendationContainer.append(`
    <div class="recommendation-card">
      <h3>📋 Decisão: ${recomendacaoFinal.decisao}</h3>
      <p><strong>Justificativa:</strong> ${recomendacaoFinal.justificativa}</p>
      
      <h4>🎯 Diferenciais Necessários:</h4>
      <ul>
        ${recomendacaoFinal.diferenciais_necessarios.map(d => `<li>${d}</li>`).join('')}
      </ul>
      
      <h4>🚀 Próximos Passos:</h4>
      <ul>
        ${recomendacaoFinal.proximos_passos.map(p => `<li>${p}</li>`).join('')}
      </ul>
    </div>
  `);

  // Smooth scroll para navegação
  $('.nav-item').on('click', function(e) {
    e.preventDefault();
    const target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top - 100
    }, 800);
  });

  // Adiciona animações de entrada
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });

  // Aplica animação a todas as seções
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
});
