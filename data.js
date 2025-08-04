const competitors = [
  {
    nome: 'Agrosmart (BR)',
    proposta: 'Plataforma de agricultura digital que combina sensores de solo e clima, armadilhas de pragas automatizadas e IA. Ajuda produtores a prever pragas, otimizar irrigação e reduzir insumos.',
    pontosFortes: 'Utiliza sensores IoT e machine learning para monitorar microclimas; armadilhas de pragas automatizadas enviam alertas; modelos preditivos ajudam a aplicar defensivos somente quando necessário.',
    pontosFracos: 'Dependência de hardware aumenta custos; foco em médios/grandes produtores; requer conectividade de dados estável.',
    pricing: 'Freemium + assinatura para módulos avançados; custos adicionais por sensor.',
    distribuicao: 'Vendas diretas e parcerias com cooperativas; presença em várias culturas; reconhecida no Brasil e na América Latina.',
    financiamento: 'Privada; informações públicas limitadas.'
  },
  {
    nome: 'Solinftec (BR/Global)',
    proposta: 'Plataforma SaaS de IA para gestão operacional em tempo real; monitora equipamentos, operações e clima para otimizar colheitas e pulverização.',
    pontosFortes: 'Liderança global com mais de 9 milhões de acres monitorados em 11 países; monitora mais de 80% da cana-de-açúcar no Brasil; equipe de >800 engenheiros e agrônomos; forte P&D.',
    pontosFracos: 'Voltada a grandes operações; custos altos; necessidade de hardware embarcado e conectividade contínua; UX complexa para pequenos produtores.',
    pricing: 'Assinatura anual e cobrança por hectare; venda de hardware.',
    distribuicao: 'Parcerias com usinas e grandes produtores; rede internacional.',
    financiamento: 'Estimativas apontam captação de dezenas de milhões de dólares (informação não oficial).'
  },
  {
    nome: 'Aegro (BR)',
    proposta: 'Sistema de gestão agrícola (ERP + campo) que integra controle financeiro, emissão de NF‑e e monitoramento de pragas/georreferenciamento.',
    pontosFortes: 'Simplifica controle de custos e mostra custo por hectare; ferramenta de monitoramento de pragas com geolocalização; permite emissão de notas e gestão financeira.',
    pontosFracos: 'Foco em produtores médios; não possui IA avançada de detecção automática por foto; depende de uso via aplicativo ou computador.',
    pricing: 'Assinatura mensal por número de usuários ou áreas; planos escaláveis.',
    distribuicao: 'Vendas diretas e marketing digital; parcerias com cooperativas.',
    financiamento: 'Fundada em 2016; recebeu investimentos de venture capital (SP Ventures); receita não divulgada.'
  },
  {
    nome: 'Strider / Cropwise (Syngenta Digital) – BR',
    proposta: 'Plataforma de monitoramento operacional e proteção de cultivos que utiliza IA e big data para prever pragas e otimizar uso de defensivos.',
    pontosFortes: 'Forte apoio da multinacional Syngenta; integra dados de campo e mercado; grande base de clientes em soja, algodão e milho; tecnologia consolidada.',
    pontosFracos: 'Foco em grandes clientes; integração com o ecossistema Syngenta pode restringir neutralidade; custos de licença; menor flexibilidade para culturas menores.',
    pricing: 'Assinatura por hectare + serviços de consultoria; inclui pacotes de insumos.',
    distribuicao: 'Distribuído via rede Syngenta; parcerias com revendas de defensivos; forte presença no Brasil e América Latina.',
    financiamento: 'Como parte da Syngenta, possui robusto financiamento; valor de aquisição não divulgado.'
  },
  {
    nome: 'RAImundo (Embrapa/MAPA & AzaP AI) – BR',
    proposta: 'Assistente de IA conversacional via WhatsApp, em beta. Oferece assistência técnica com base em dados públicos, orienta sobre gestão agrícola, clima, mercado, pragas e solos, e simplifica o acesso a políticas públicas; possui balcão digital para compra e venda de insumos.',
    pontosFortes: 'Construído com foco em inclusão digital e linguagem acessível; interface via WhatsApp minimiza barreiras; gratuito; meta de 100 mil usuários no 1º ano; integra comércio eletrônico e georreferenciamento.',
    pontosFracos: 'Funciona apenas via texto (não inclui reconhecimento de imagem de pragas); qualidade das respostas depende de bases públicas; beta pode ter limitações de escalabilidade; dependência de apoio público.',
    pricing: 'Beta gratuito; versão final deve permanecer gratuita ou freemium orientada a políticas públicas.',
    distribuicao: 'Ministério da Agricultura e Embrapa; parcerias com cooperativas e associações; divulgação nacional.',
    financiamento: 'Financiado por recursos públicos e AzaP AI; sem receitas comerciais no curto prazo.'
  },
  {
    nome: 'Auravant (AR/ES, LatAm)',
    proposta: 'Plataforma de agricultura digital com imagens de satélite, monitoramento de NDVI e alertas; permite registrar aplicações e identificar problemas.',
    pontosFortes: 'Fácil uso via web/app; foca em pequenos e médios produtores na Argentina e Espanha; integração com dados climáticos; algumas funções gratuitas.',
    pontosFracos: 'Detecta estresse via imagens mas não faz diagnóstico preciso por foto; depende de internet.',
    pricing: 'Freemium com planos pagos por hectare e módulos extras.',
    distribuicao: 'Distribuição digital; programas com governos (por exemplo, Ministério da Agricultura da Argentina).',
    financiamento: 'Recebeu investimentos da The Yield Lab; presença em vários países latinos.'
  },
  {
    nome: 'Grão Direto / Agrofy (BR/AR)',
    proposta: 'Marketplaces que digitalizam a comercialização de grãos e insumos, conectando produtores a compradores e fornecedores.',
    pontosFortes: 'Grande base de usuários; transparência de preços; reduzem custos de transação; ampliam acesso a insumos e canais de venda.',
    pontosFracos: 'Não oferecem suporte agronômico; riscos de liquidez e concentração; foco em culturas exportadoras; não atendem pragas.',
    pricing: 'Cobram comissão sobre transações ou planos de assinatura; revenue share.',
    distribuicao: 'Estratégia via marketplace online, marketing digital e parcerias com tradings; forte presença em soja e milho.',
    financiamento: 'Grão Direto captou mais de R$ 50 mi; Agrofy captou >US$ 35 mi.'
  },
  {
    nome: 'Plantix (DE/Global)',
    proposta: 'Aplicativo gratuito que usa IA para diagnosticar doenças e pragas a partir de fotos; traduz recomendações em diversos idiomas.',
    pontosFortes: 'Aplicativo mais baixado por agricultores no mundo; transforma o celular em um médico de culturas, detectando pragas em segundos; apoio de instituições de pesquisa e ampla comunidade; integra fóruns entre agricultores.',
    pontosFracos: 'Depende de smartphone e internet; dificuldades de monetização (gratuito); menos adaptado a cada região; não cobre aspectos financeiros da fazenda.',
    pricing: 'Modelo freemium; receita via anúncios, dados agronômicos e venda de soluções de insumos.',
    distribuicao: 'Distribuição digital; parcerias com governos e ONGs em Ásia/África; >20 milhões de usuários.',
    financiamento: 'Levantou capital de fundos como Atlantic Labs; sem dados recentes de receita.'
  }
];

const mercado = {
  labels: ['TAM', 'SAM', 'SOM'],
  valores: [3.9, 1.0, 0.1], // milhões de usuários
  descricao: 'Estimativas de mercado em milhões de agricultores familiares no Brasil'
};

const pricingModels = [
  {
    modelo: 'Assinatura mensal por hectare ou por usuário',
    vantagens: 'Receita previsível; incentiva uso contínuo; ajustável por tamanho da propriedade.',
    desvantagens: 'Requer educação financeira e bancarização; agricultores familiares podem resistir a pagamentos recorrentes; risco de churn.',
    elasticidade: 'Preço baixo (R$ 10–20/mês) gera volume, mas margens apertadas; descontos para cooperativas podem impulsionar adoção.'
  },
  {
    modelo: 'Pay-per-use (por foto analisada, alerta ou relatório)',
    vantagens: 'Baixa barreira de entrada; paga-se apenas pelo que usar; facilita testes pilotos.',
    desvantagens: 'Receita variável; usuários podem reduzir uso para economizar; difícil prever faturamento; uso esporádico limita impacto agronômico.',
    elasticidade: 'Adequado para diagnóstico ocasional; preço de R$ 1–3 por foto é atraente; margens maiores por transação, porém volume incerto.'
  },
  {
    modelo: 'Revenue share sobre insumos economizados ou produtividade',
    vantagens: 'Alinha incentivos: AgroGuia é remunerada quando gera valor (redução de defensivos, aumento de rendimento).',
    desvantagens: 'Requer medição robusta de economia de insumos ou aumento de produção; complexidade jurídica; riscos climáticos podem reduzir performance.',
    elasticidade: 'Potencial de alta margem se comprovada economia (>R$ 50/ha); adequado para cooperativas; baixa elasticidade pois paga-se quando há ganhos.'
  }
];

const swot = {
  strengths: [
    'Reconhecimento de pragas por foto aliado a alertas de irrigação e recomendações em áudio.',
    'Uso de canal conhecido (WhatsApp/SMS) que exige pouca infraestrutura.',
    'Potencial para gerar dados valiosos para cooperativas e órgãos públicos.',
    'Pode reduzir uso de defensivos, gerando economia e apelo ambiental.'
  ],
  weaknesses: [
    'Necessidade de construir e treinar modelo de IA robusto com amostras regionais.',
    'Dependência de boa qualidade de foto; agricultores podem enviar imagens ruins.',
    'Faltam dados de geolocalização e microclima para recomendações precisas.',
    'Risco de sobrecarga de suporte se muitos usuários fizerem perguntas gerais.'
  ],
  opportunities: [
    'Ausência de soluções completas para agricultura familiar abre espaço para liderança.',
    'Aumento da conectividade rural e programas governamentais de digitalização.',
    'Possibilidade de parceria com Embrapa e cooperativas para validação e distribuição.',
    'Crescimento do mercado de IA agrícola (CAGR 26,3% até 2034).'
  ],
  threats: [
    'Concorrência de RAImundo e futuros assistentes de IA gratuitos pelo governo.',
    'Baixa adoção de tecnologia e alfabetização digital (apenas 26% tinham internet em 2017).',
    'Riscos regulatórios quanto ao uso de dados e privacidade (LGPD).',
    'Dependência do clima e eventos extremos pode prejudicar eficácia.'
  ]
};

const benchmarks = {
  sucesso: [
    {
      nome: 'Solinftec',
      licao: 'Foco em eficiência operacional, suporte agronômico forte e modelo SaaS escalável geraram liderança em 9 M de acres.'
    },
    {
      nome: 'Plantix',
      licao: 'Simplicidade de uso e comunidade global permitiram diagnóstico de pragas por foto em segundos, distribuído gratuitamente.'
    },
    {
      nome: 'RAImundo',
      licao: 'Parcerias governo-startup e uso de WhatsApp alcançam escala com inclusão digital.'
    }
  ],
  fracasso: [
    {
      nome: 'Hardware caro de monitoramento',
      licao: 'Alto custo e falta de assistência impediram escala entre pequenos produtores.'
    },
    {
      nome: 'Marketplaces de insumos sem confiança',
      licao: 'Sem marca confiável, logística ou crédito rural integrado, a adoção foi baixa.'
    },
    {
      nome: 'Apps de recomendação genérica',
      licao: 'Falta de personalização regional ou validação científica resultou em baixa retenção.'
    }
  ]
};

const redFlags = [
  {
    risco: 'Falta de base de dados local para treinar o modelo de reconhecimento de pragas.',
    mitigacao: 'Firmar convênios com Embrapa e universidades; usar aprendizado federado com consentimento dos usuários.'
  },
  {
    risco: 'Adoção limitada devido à exclusão digital.',
    mitigacao: 'Integrar com SMS e atendimento via telefone; desenvolver PWA leve que funcione offline; parcerias com operadoras para dados subsidiados.'
  },
  {
    risco: 'Riscos de privacidade e LGPD.',
    mitigacao: 'Implementar políticas de consentimento explícito; anonimizar dados; hospedar informações em servidores seguros; consultar advogado especializado.'
  },
  {
    risco: 'Dependência de recursos de venture capital sem plano de monetização claro.',
    mitigacao: 'Testar modelos híbridos de receita; buscar fomento público e parcerias com empresas de insumos.'
  },
  {
    risco: 'Escalabilidade do suporte agronômico.',
    mitigacao: 'Criar rede de agrônomos parceiros; usar IA generativa para questões gerais; implementar fórum comunitário moderado.'
  }
];

const experimentos = [
  'Piloto com cooperativa de 200 produtores por 3 meses medindo adoção, precisão dos diagnósticos, redução de defensivos e satisfação.',
  'Parceria com Embrapa ou universidades para coletar 5 mil fotos de pragas e validar a acurácia do modelo de IA.',
  'Campanha de inclusão digital com operadoras oferecendo planos de dados específicos e roadshow em sindicatos rurais.'
];

const crescimentoIA = {
  labels: Array.from({ length: 11 }, (_, i) => 2024 + i),
  valores: Array.from({ length: 11 }, (_, i) => +(4.7 * Math.pow(1.263, i)).toFixed(2)),
  descricao: 'Projeção de mercado global de IA na agricultura (US$ bilhões) a 26,3% CAGR'
};

// Novos dados implementados baseados na análise

const segmentosPrioritarios = [
  {
    segmento: 'Hortaliças e frutas',
    descricao: 'Tomate, pimentão, batata e frutas tropicais',
    problemas: 'Alta incidência de fungos e pragas',
    mercado: 'Dominada por agricultores familiares'
  },
  {
    segmento: 'Mandioca e raízes',
    descricao: 'Culturas de subsistência',
    problemas: 'Brocas e ácaros, perdas elevadas',
    mercado: 'Importante para segurança alimentar'
  },
  {
    segmento: 'Leite e pecuária familiar',
    descricao: 'Produção leiteira e criação animal',
    problemas: 'Mastite e pastagens degradadas',
    mercado: 'Oportunidades para monitorar saúde animal'
  },
  {
    segmento: 'Grãos (soja, milho, feijão)',
    descricao: 'Pequenos produtores de grãos',
    problemas: 'Lagartas e percevejos',
    mercado: 'Adoção de tecnologia pode reduzir custos'
  }
];

const dadosConectividade = {
  conectividadeRural2017: 26,
  conectividadeRural2025: 40,
  agricultura_familiar_total: 3897408,
  percentual_estabelecimentos: 77,
  emprego_agricola: 67
};

const estimativasFinanceiras = {
  tam_usuarios: 3.9, // milhões
  tam_valor_anual: 936, // R$ milhões
  sam_usuarios: 1.0, // milhões  
  som_usuarios: 0.1, // milhões
  perdas_pragas_brasil: 55, // R$ bilhões anuais
  tam_america_latina: 3, // US$ bilhões estimado
  perdas_globais_min: 20, // % perdas mínimas
  perdas_globais_max: 40 // % perdas máximas
};

const recomendacaoFinal = {
  decisao: 'Pivot-Go',
  justificativa: 'A ideia tem potencial, mas exige ajustes antes de grandes investimentos. Há oportunidade real no mercado de agricultura familiar, mas é necessária diferenciação frente a iniciativas públicas (RAImundo) e redução das barreiras tecnológicas.',
  diferenciais_necessarios: [
    'Maior precisão no diagnóstico por foto vs soluções públicas',
    'Dashboards acionáveis para cooperativas',
    'Modelo de negócio sustentável (freemium → assinaturas)',
    'Parcerias estratégicas com Embrapa e cooperativas'
  ],
  proximos_passos: [
    'Validar MVP com cooperativa piloto',
    'Construir dataset de pragas regionais',
    'Definir modelo de monetização híbrido',
    'Estabelecer parcerias institucionais'
  ]
};
