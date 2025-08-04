$(document).ready(function () {
  // Função para criar medidor de relevância visual com análise detalhada
  function createRelevanceMeter(competitor) {
    if (!competitor.relevancia) {
      return '<span style="color: #999;">N/A</span>';
    }
    
    const { score, nivel, justificativa, criterios } = competitor.relevancia;
    const colors = {
      'Muito Alto': '#d32f2f',
      'Alto': '#f57c00', 
      'Médio-Alto': '#fbc02d',
      'Médio': '#689f38',
      'Baixo-Médio': '#388e3c',
      'Baixo': '#1976d2'
    };
    
    const color = colors[nivel] || '#757575';
    const percentage = (score / 10) * 100;
    
    // Criar breakdown dos critérios
    const criteriosText = criterios ? `
      <div class="criterios-breakdown">
        <strong>Breakdown dos Critérios:</strong><br>
        • Sobreposição de Mercado: ${criterios.mercado || 0}/3<br>
        • Similaridade da Proposta: ${criterios.proposta || 0}/2<br>
        • Força de Distribuição: ${criterios.distribuicao || 0}/2<br>
        • Recursos Financeiros: ${criterios.recursos || 0}/2<br>
        • Barreira de Entrada: ${criterios.barreira || 0}/1
      </div>
    ` : '';
    
    return `
      <div class="relevance-meter-expanded">
        <div class="meter-header">
          <div class="meter-bar">
            <div class="meter-fill" style="width: ${percentage}%; background-color: ${color};"></div>
          </div>
          <div class="meter-info">
            <span class="score">${score}/10</span>
            <span class="level" style="color: ${color}; font-weight: bold;">${nivel}</span>
          </div>
        </div>
        <div class="analysis-text">
          <div class="justificativa">
            <strong>Análise:</strong> ${justificativa}
          </div>
          ${criteriosText}
        </div>
      </div>
    `;
  }

  // Preenche a tabela de concorrentes com medidor de relevância
  const headers = ['Nome', 'Proposta de valor', 'Pontos fortes', 'Pontos fracos / gaps', 'Modelo de pricing', 'Distribuição & tração', 'Medidor de Relevância'];
  const table = $('#competitors');
  table.append('<thead><tr>' + headers.map(h => `<th>${h}</th>`).join('') + '</tr></thead>');
  const tbody = $('<tbody></tbody>');
  
  // Ordena concorrentes por score de relevância (maior ameaça primeiro)
  const sortedCompetitors = [...competitors].sort((a, b) => {
    const scoreA = a.relevancia ? a.relevancia.score : 0;
    const scoreB = b.relevancia ? b.relevancia.score : 0;
    return scoreB - scoreA;
  });
  
  sortedCompetitors.forEach(c => {
    const relevanceMeter = createRelevanceMeter(c);
      
    tbody.append(
      `<tr class="competitor-row" data-score="${c.relevancia ? c.relevancia.score : 0}">
        <td><strong>${c.nome}</strong></td>
        <td>${c.proposta}</td>
        <td>${c.pontosFortes}</td>
        <td>${c.pontosFracos}</td>
        <td>${c.pricing}</td>
        <td>${c.distribuicao}</td>
        <td>${relevanceMeter}</td>
      </tr>`
    );
  });
  table.append(tbody);
  table.DataTable({ 
    paging: false, 
    searching: true,
    scrollX: true,
    responsive: true,
    order: [[6, 'desc']], // Ordena por relevância por padrão
    columnDefs: [
      { width: "10%", targets: 0 },
      { width: "15%", targets: 1 },
      { width: "12%", targets: 2 },
      { width: "12%", targets: 3 },
      { width: "8%", targets: 4 },
      { width: "12%", targets: 5 },
      { width: "31%", targets: 6, orderable: true } // Coluna mais larga para análise
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
  const redTable = $('#redflags-table');
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

  // Insights Importantes (derivados dos dados e do PDF)
  const insights = [
    {
      titulo: 'Maior ameaça competitiva: RAImundo (público-alvo idêntico)',
      detalhe: 'Canal de distribuição governamental e objetivo de escala nacional tornam RAImundo a ameaça mais alta (score 8,5). Diferenciar via diagnóstico por imagem é crítico.',
      tag: 'Concorrência',
      fonte: 'Análise – seção concorrentes',
      impacto: 'alto'
    },
    {
      titulo: 'Oportunidade: perdas anuais por pragas ~R$ 55 bi no Brasil',
      detalhe: 'Reduzir 5–10% destas perdas em hortaliças e frutas já justificaria adoção em cooperativas.',
      tag: 'Mercado',
      fonte: 'Estimativas Financeiras',
      impacto: 'alto'
    },
    {
      titulo: 'Conectividade ainda é gargalo, mas em melhora',
      detalhe: 'Rural conectado estimado de 26% (2017) para 40% (2025). Necessário PWA offline + SMS/WhatsApp para inclusão digital.',
      tag: 'Go-to-market',
      fonte: 'Conectividade',
      impacto: 'médio'
    },
    {
      titulo: 'Modelo de receita híbrido recomendado',
      detalhe: 'Começar freemium + pay-per-use/assinatura baixa; evoluir para revenue share com cooperativas quando houver prova de valor.',
      tag: 'Monetização',
      fonte: 'Modelos de Monetização',
      impacto: 'médio'
    },
    {
      titulo: 'Segmentos prioritários com maior ROI inicial',
      detalhe: 'Hortaliças/frutas e mandioca apresentam alta incidência de pragas e forte presença de agricultura familiar; priorizar estes nichos.',
      tag: 'Segmentação',
      fonte: 'Segmentos Prioritários',
      impacto: 'alto'
    },
    {
      titulo: 'Recomendação estratégica: Pivot-Go',
      detalhe: 'Prosseguir com ajustes: foco em diferenciação técnica, parcerias com Embrapa/cooperativas e UX inclusiva para baixo letramento digital.',
      tag: 'Estratégia',
      fonte: 'Recomendação Final',
      impacto: 'alto'
    }
  ];

  const insightsContainer = $('#insights-container');
  insights.forEach(ins => {
    const badgeColor = ins.impacto === 'alto' ? 'var(--secondary-light)' : 'var(--accent-light)';
    const badgeTextColor = ins.impacto === 'alto' ? 'var(--secondary)' : 'var(--accent)';
    insightsContainer.append(`
      <div class="insight-card">
        <div class="insight-badge" style="background:${badgeColor}; color:${badgeTextColor}">${ins.tag}</div>
        <div class="insight-title">${ins.titulo}</div>
        <div class="insight-detail">${ins.detalhe}</div>
        <div class="insight-meta">Fonte: ${ins.fonte}</div>
      </div>
    `);
  });

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

  // Tema (claro/escuro) com persistência
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('agro_theme');
  if (savedTheme === 'dark') {
    root.classList.add('dark');
  }
  $('#themeToggle').on('click', () => {
    root.classList.toggle('dark');
    const mode = root.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('agro_theme', mode);
  });

  // Back to top button logic
  const backBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) backBtn.classList.add('show');
    else backBtn.classList.remove('show');
  });
  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Destacar item ativo no menu conforme a rolagem
  const sections = Array.from(document.querySelectorAll('section'));
  const navLinks = Array.from(document.querySelectorAll('.nav-item'));
  const sectionById = Object.fromEntries(sections.map(s => [s.id, s]));
  const linkByHash = Object.fromEntries(navLinks.map(a => [a.getAttribute('href').replace('#',''), a]));
  const setActive = (id) => {
    navLinks.forEach(a => a.classList.remove('active'));
    if (linkByHash[id]) linkByHash[id].classList.add('active');
  };
  const onScroll = () => {
    let current = sections[0]?.id;
    const offset = 120;
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top - offset <= 0) current = sec.id;
    });
    if (current) setActive(current);
  };
  window.addEventListener('scroll', onScroll);
  onScroll();
});
