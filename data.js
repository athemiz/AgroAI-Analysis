const competitors = [
  {
    nome: 'Agrosmart (BR)',
    proposta: 'Plataforma de agricultura digital que combina sensores de solo e clima, armadilhas de pragas automatizadas e IA. Ajuda produtores a prever pragas, otimizar irrigação e reduzir insumos.',
    pontosFortes: 'Utiliza sensores IoT e machine learning para monitorar microclimas; armadilhas de pragas automatizadas enviam alertas; modelos preditivos ajudam a aplicar defensivos somente quando necessário.',
    pontosFracos: 'Dependência de hardware aumenta custos; foco em médios/grandes produtores; requer conectividade de dados estável.',
    pricing: 'Freemium + assinatura para módulos avançados; custos adicionais por sensor.',
    distribuicao: 'Vendas diretas e parcerias com cooperativas; presença em várias culturas; reconhecida no Brasil e na América Latina.'
  },
  {
    nome: 'Solinftec (BR/Global)',
    proposta: 'Plataforma SaaS de IA para gestão operacional em tempo real; monitora equipamentos, operações e clima para otimizar colheitas e pulverização.',
    pontosFortes: 'Liderança global com mais de 9 milhões de acres monitorados em 11 países; monitora mais de 80% da cana-de-açúcar no Brasil; equipe de >800 engenheiros e agrônomos; forte P&D.',
    pontosFracos: 'Voltada a grandes operações; custos altos; necessidade de hardware embarcado e conectividade contínua; UX complexa para pequenos produtores.',
    pricing: 'Assinatura anual e cobrança por hectare; venda de hardware.',
    distribuicao: 'Parcerias com usinas e grandes produtores; rede internacional.'
  },
  {
    nome: 'Aegro (BR)',
    proposta: 'Sistema de gestão agrícola (ERP + campo) que integra controle financeiro, emissão de NF‑e e monitoramento de pragas/georreferenciamento.',
    pontosFortes: 'Simplifica controle de custos e mostra custo por hectare; ferramenta de monitoramento de pragas com geolocalização; permite emissão de notas e gestão financeira.',
    pontosFracos: 'Foco em produtores médios; não possui IA avançada de detecção automática por foto; depende de uso via aplicativo ou computador.',
    pricing: 'Assinatura mensal por número de usuários ou áreas; planos escaláveis.',
    distribuicao: 'Vendas diretas e marketing digital; parcerias com cooperativas.'
  },
  {
    nome: 'Strider / Cropwise (Syngenta Digital) – BR',
    proposta: 'Plataforma de monitoramento operacional e proteção de cultivos que utiliza IA e big data para prever pragas e otimizar uso de defensivos.',
    pontosFortes: 'Forte apoio da multinacional Syngenta; integra dados de campo e mercado; grande base de clientes em soja, algodão e milho; tecnologia consolidada.',
    pontosFracos: 'Foco em grandes clientes; integração com o ecossistema Syngenta pode restringir neutralidade; custos de licença; menor flexibilidade para culturas menores.',
    pricing: 'Assinatura por hectare + serviços de consultoria; inclui pacotes de insumos.',
    distribuicao: 'Distribuído via rede Syngenta; parcerias com revendas de defensivos; forte presença no Brasil e América Latina.'
  },
  {
    nome: 'RAImundo (Embrapa/MAPA & AzaP AI) – BR',
    proposta: 'Assistente de IA conversacional via WhatsApp, em beta. Oferece assistência técnica com base em dados públicos, orienta sobre gestão agrícola, clima, mercado, pragas e solos, e simplifica o acesso a políticas públicas; possui balcão digital para compra e venda de insumos.',
    pontosFortes: 'Construído com foco em inclusão digital e linguagem acessível; interface via WhatsApp minimiza barreiras; gratuito; meta de 100 mil usuários no 1º ano; integra comércio eletrônico e georreferenciamento.',
    pontosFracos: 'Funciona apenas via texto (não inclui reconhecimento de imagem de pragas); qualidade das respostas depende de bases públicas; beta pode ter limitações de escalabilidade; dependência de apoio público.',
    pricing: 'Beta gratuito; versão final deve permanecer gratuita ou freemium orientada a políticas públicas.',
    distribuicao: 'Ministério da Agricultura e Embrapa; parcerias com cooperativas e associações; divulgação nacional.'
  },
  {
    nome: 'Auravant (AR/ES, LatAm)',
    proposta: 'Plataforma de agricultura digital com imagens de satélite, monitoramento de NDVI e alertas; permite registrar aplicações e identificar problemas.',
    pontosFortes: 'Fácil uso via web/app; foca em pequenos e médios produtores na Argentina e Espanha; integração com dados climáticos; algumas funções gratuitas.',
    pontosFracos: 'Detecta estresse via imagens mas não faz diagnóstico preciso por foto; depende de internet.',
    pricing: 'Freemium com planos pagos por hectare e módulos extras.',
    distribuicao: 'Distribuição digital; programas com governos (por exemplo, Ministério da Agricultura da Argentina).'
  },
  {
    nome: 'Grão Direto / Agrofy (BR/AR)',
    proposta: 'Marketplaces que digitalizam a comercialização de grãos e insumos, conectando produtores a compradores e fornecedores.',
    pontosFortes: 'Grande base de usuários; transparência de preços; reduzem custos de transação; ampliam acesso a insumos e canais de venda.',
    pontosFracos: 'Não oferecem suporte agronômico; riscos de liquidez e concentração; foco em culturas exportadoras; não atendem pragas.',
    pricing: 'Cobram comissão sobre transações ou planos de assinatura; revenue share.',
    distribuicao: 'Estratégia via marketplace online, marketing digital e parcerias com tradings; forte presença em soja e milho.'
  },
  {
    nome: 'Plantix (DE/Global)',
    proposta: 'Aplicativo gratuito que usa IA para diagnosticar doenças e pragas a partir de fotos; traduz recomendações em diversos idiomas.',
    pontosFortes: 'Aplicativo mais baixado por agricultores no mundo; transforma o celular em um médico de culturas, detectando pragas em segundos; apoio de instituições de pesquisa e ampla comunidade; integra fóruns entre agricultores.',
    pontosFracos: 'Depende de smartphone e internet; dificuldades de monetização (gratuito); menos adaptado a cada região; não cobre aspectos financeiros da fazenda.',
    pricing: 'Modelo freemium; receita via anúncios, dados agronômicos e venda de soluções de insumos.',
    distribuicao: 'Distribuição digital; parcerias com governos e ONGs em Ásia/África; >20 milhões de usuários.'
  }
];

const mercado = {
  labels: ['TAM', 'SAM', 'SOM'],
  valores: [3.9, 1.0, 0.1], // milhões de usuários
  descricao: 'Estimativas de mercado em milhões de agricultores familiares no Brasil'
};
