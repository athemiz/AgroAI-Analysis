$(document).ready(function () {
  // Preenche a tabela de concorrentes
  const headers = ['Nome', 'Proposta de valor', 'Pontos fortes', 'Pontos fracos / gaps', 'Modelo de pricing', 'Distribuição & tração'];
  const table = $('#competitors');
  table.append('<thead><tr>' + headers.map(h => `<th>${h}</th>`).join('') + '</tr></thead>');
  const tbody = $('<tbody></tbody>');
  competitors.forEach(c => {
    tbody.append(
      `<tr>
        <td>${c.nome}</td>
        <td>${c.proposta}</td>
        <td>${c.pontosFortes}</td>
        <td>${c.pontosFracos}</td>
        <td>${c.pricing}</td>
        <td>${c.distribuicao}</td>
      </tr>`
    );
  });
  table.append(tbody);
  table.DataTable({ paging: false, searching: false });

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

  // Matriz SWOT
  const swotDiv = $('#swot');
  const swotMap = {
    strengths: 'Forças',
    weaknesses: 'Fraquezas',
    opportunities: 'Oportunidades',
    threats: 'Ameaças'
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
        fill: false
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'US$ bilhões'
          }
        }
      }
    }
  });
});
