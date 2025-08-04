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
});
