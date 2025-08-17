export const slideTitles = [
  "Talker Flow Comercial — Semana 1",
  "Bem-vinda, Beatriz!",
  "Suas 4 Funções Principais",
  "Conceitos Comerciais Básicos - Parte 1",
  "Conceitos Comerciais Básicos - Parte 2", 
  "Funil de Vendas e Etapas",
  "Visão do Produto e Diferencial",
  "Segmentos Foco - Visão Geral",
  "Clínicas: Dores e Oportunidades",
  "Imobiliárias: Dores e Oportunidades",
  "Escolas: Dores e Oportunidades",
  "Proposta de Valor e Oferta",
  "Funil no EspoCRM",
  "Divisão Comercial da Equipe",
  "Metodologia de Prospecção - Passo a Passo",
  "Rotina Diária de Prospecção",
  "Redes Sociais: Suas Responsabilidades",
  "Métricas Norte",
  "Scripts E-mail e Instagram",
  "Objeções & Respostas",
  "Playbook Clínicas",
  "Playbook Imobiliárias", 
  "Playbook Escolas",
  "Roteiro Micro-Demo",
  "Proposta de 1 Página",
  "Plano Semana 1",
  "Remuneração e Comissionamento",
  "Próximos Passos",
  "Apêndice: Speed-to-Lead",
  "Apêndice: Templates",
  "Encerramento & Boas-vindas"
];

export const whatsappScripts = {
  clinicas: {
    initial: "Colocamos seu WhatsApp respondendo em 5s, 24/7, agendando direto. 1 paciente paga tudo. Ativo um piloto de 7 dias hoje?",
    followup: "Olá! Viu minha mensagem sobre automatizar seu WhatsApp? Reduzimos o tempo de resposta para 5 segundos e aumentamos agendamentos. Vale 15 min para conhecer?",
    objection_ia: "Entendo a preocupação! Nossa IA é treinada com seu vocabulário e tem botão 'Desativar IA' - você assume quando quiser. Conversa até em áudio e 24 idiomas!"
  },
  imobiliarias: {
    initial: "Quem responde primeiro marca visita. Atendimento em 5s, ficha do imóvel e agendamento com corretor. Bora testar 7 dias?",
    followup: "Oi! Sobre automatizar seu atendimento imobiliário - quantas visitas você perde por responder tarde? Nossa IA responde em 5s e agenda na hora.",
    objection_manual: "Sei que vocês gostam do contato direto. Nossa IA só qualifica e agenda - o 'taco' de vendas continua sendo seu na visita presencial!"
  },
  escolas: {
    initial: "Na captação agora até nov, pais querem resposta imediata. Qualificamos série/turno e marcamos visita todo dia. 1 matrícula já cobre. Ativo um piloto 7 dias?",
    followup: "Oi! Sobre automatizar a captação de matrículas - estamos em agosto, pico da procura. Nossa IA qualifica e agenda visitas 24/7. Podemos conversar?",
    objection_pais: "Entendo! Nossa IA é super humanizada com os pais - responde dúvidas, agenda visitas e tem botão para transferir para vocês a qualquer momento."
  }
};

export const emailScripts = {
  clinicas: {
    subject: "WhatsApp automatizado para sua clínica",
    body: "Olá!\n\nVi que vocês atendem muito pelo WhatsApp. E se pudessem responder em 5 segundos, 24 horas por dia?\n\nNossa IA agenda consultas automaticamente - 1 paciente extra no mês já paga o investimento.\n\nTeste grátis por 7 dias?\n\n[Seu nome]"
  },
  imobiliarias: {
    subject: "Automatize seu WhatsApp imobiliário",
    body: "Oi!\n\nQuem responde primeiro no mercado imobiliário marca mais visitas, certo?\n\nNossa IA responde leads em 5 segundos, envia fichas dos imóveis e agenda visitas com seus corretores.\n\n1 venda extra cobre o ano todo.\n\nQuer testar 7 dias grátis?\n\n[Seu nome]"
  },
  escolas: {
    subject: "Automatize a captação de matrículas",
    body: "Olá!\n\nCom a captação de matrículas acontecendo agora, pais procuram respostas imediatas.\n\nNossa IA qualifica série/turno e agenda visitas automaticamente, 24/7.\n\n1 matrícula extra já cobre o investimento anual.\n\nPodemos agendar uma demo rápida?\n\n[Seu nome]"
  }
};

export const objections = [
  {
    objection: "Parece robô / IA erra muito",
    response: "Nossa IA é treinada com seu vocabulário específico + botão 'Desativar IA' para você assumir quando quiser. Conversa até por áudio e em 24 idiomas!"
  },
  {
    objection: "Já tenho recepcionista/corretor",
    response: "Perfeito! Cobrimos noite, finais de semana além de ser aliado dos seu atendente!. Sua equipe foca no que faz melhor - 1 venda extra já paga tudo."
  },
  {
    objection: "Deve ser muito difícil de configurar, não sei programação",
    response: "Você mostra o passo a passo, igualzinho seria com um funcionário novo! É só escrever o que vc quer, que a IA entende. Temos treinamentos prontos para (negócio dele) como a sua, que dá pra colcoar no ar em 20 min."
  },
  {
    objection: "Não quero prometer números",
    response: "Correto! Medimos tempo de 1ª resposta (de horas para 5s) e agendamentos. Você decide se vale a pena continuar."
  },
  {
    objection: "Muito caro!",
    response: "Comparação de custo pessoa / IA. E se eu te der 7 dias gratis pra vc testar? Se não reduzir seu tempo de resposta e não for simples, você não continua."
  }
];

export const crmStages = [
  { stage: "Novo", description: "Lead recém chegado, sem contato" },
  { stage: "Tentativa 1", description: "Primeira tentativa de contato realizada" },
  { stage: "Tentativa 2", description: "Segunda tentativa de contato" },
  { stage: "Conectado/Descoberta", description: "Contato estabelecido, entendendo necessidades" },
  { stage: "Piloto/Demo agendada", description: "Demonstração ou piloto agendado" },
  { stage: "Piloto/Demo realizada", description: "Apresentação finalizada" },
  { stage: "Negociação", description: "Em processo de negociação" },
  { stage: "Fechado Positivo", description: "Cliente fechado!" },
  { stage: "Fechado Negativo", description: "Oportunidade perdida" },
  { stage: "Nutrir", description: "Lead para nutrição futura" }
];

export const sqlChecklist = [
  "✓ WhatsApp como canal principal de atendimento",
  "✓ Pelo menos 20 conversas por dia no WhatsApp", 
  "✓ Dor declarada (demora na resposta, perda de leads, bagunça)",
  "✓ Ticket médio cobre R$ 799 com apenas 1 venda"
];

export const weeklyTargets = {
  days: [
    { day: "D1-D2", newLeads: 24, followUps: "10-15", demos: "2-3 agendadas" },
    { day: "D3-D5", newLeads: 30, followUps: "20-25", demos: "3 realizadas/dia" }
  ],
  weekGoal: "126 leads prospectados, 4 demos, 1 lead com proposta enviada, se possível, 1 fechamento"
};

export const beatrizFunctions = [
  {
    title: "Prospecção Ativa",
    description: "Buscar e qualificar novos clientes",
    details: ["Pesquisa de leads em  3 segmentos", "Primeiro contato via WhatsApp ou Email", "Qualificação inicial usando checklist"]
  },
  {
    title: "Negociação e Fechamento", 
    description: "Conduzir o pipeline de vendas até a assinatura",
    details: ["Agendar demos com prospects qualificados", "Apresentar proposta de valor", "Negociar condições e fechar contratos"]
  },
  {
    title: "Suporte ao Cliente (Em Breve)",
    description: "Ajudar clientes que precisam de suporte na plataforma", 
    details: ["Responder dúvidas técnicas básicas", "Escalar problemas complexos", "Garantir satisfação do cliente"]
  },
  {
    title: "Redes Sociais",
    description: "Criar conteúdo e manter presença digital da Talker Flow",
    details: ["1 story por dia no Instagram", "1 publicação a cada 3 dias", "Calendário de conteúdo para 15 dias"]
  }
];

export const commercialBasics = {
  roi: {
    definition: "Return on Investment - Retorno sobre Investimento",
    formula: "ROI = (Ganho - Investimento) / Investimento × 100",
    example: "Cliente paga R$ 799/mês, ganha R$ 3.000 em vendas extras → ROI = 275%"
  },
  cac: {
    definition: "Customer Acquisition Cost - Custo de Aquisição de Cliente", 
    formula: "CAC = Gastos de Marketing + Vendas / Nº de Clientes Adquiridos",
    example: "Se gastamos R$ 2.000 para fechar 4 clientes → CAC = R$ 500"
  },
  ltv: {
    definition: "Lifetime Value - Valor Vitalício do Cliente",
    formula: "LTV = Ticket Médio × Frequência × Tempo de Vida",
    example: "Cliente paga R$ 799 por 24 meses → LTV = R$ 19.176"
  }
};

export const funnelStages = {
  topo: {
    name: "Topo do Funil",
    description: "Atração e conscientização do problema",
    actions: ["Conteúdo educativo", "Anúncios de alcance", "SEO e Prospecção ativa"],
    volume: "Alto volume, baixa qualificação"
  },
  meio: {
    name: "Meio do Funil", 
    description: "Consideração e avaliação de soluções",
    actions: ["Conversas iniciais", "Primeiras reuniões", "Entendimento da dor"],
    volume: "Volume médio, qualificação crescente"
  },
  fundo: {
    name: "Fundo do Funil",
    description: "Decisão de compra",
    actions: ["Demomstração", "Propostas", "Trials"],
    volume: "Baixo volume, alta qualificação"
  }
};

export const segmentPains = {
  clinicas: {
    experience: "Fui diretor financeiro e comercial de clínica que faturava R$ 500k/mês por 4 anos",
    mainPains: [
      "Perdem agendamentos fora do horário comercial",
      "Secretária sobrecarregada com calls e WhatsApp",
      "Confirmações de consulta feitas manualmente",
      "Perda de histórico de conversas quando funcionário sai"
    ],
    opportunities: [
      "Pacientes mandam mensagem à noite/fim de semana",
      "Ticket alto (R$ 2-4k) - 1 paciente extra paga tudo",
      "Necessidade de agilidade para emergências",
      "Muitas mensagens são pessoas diferentes perguntando a mesma coisa"
    ]
  },
  imobiliarias: {
    experience: "Colocar experiência",
    mainPains: [
      "Quem responde primeiro marca a visita",
      "Corretores gerenciam múltiplos números",
      "Leads frios dos portais imobiliários", 
      "Falta de qualificação de prospects"
    ],
    opportunities: [
      "1 aluguel (R$ 2-3k) ou venda (6% de R$ 500k) paga o ano todo",
      "Mercado pouco profissionalizado = oportunidade",
      "Leads de placa/site precisam resposta rápida",
      "Corretor pode focar no presencial"
    ]
  },
  escolas: {
    experience: "Fui diretor comercial de escola particular por 3 anos",
    mainPains: [
      "Pais querem resposta imediata (2º Sem = pico)",
      "Múltiplos números da escola causam confusão",
      "Comercial é sazonal, não costuma ter um vendedor fixo (Não é foco)",
      "Dificuldade para agendar visitas"
    ],
    opportunities: [
      "Período sazonal agosto-novembro = urgência",
      "A IA atende dezenas de pais. Uma matríucula, pagou por tudo",
      "Pais pesquisam múltiplas escolas rapidamente",
      "Automatizar qualificação série/turno/campus"
    ]
  }
};

export const socialMediaPlan = {
  expectations: {
    stories: "1 story por dia mínimo",
    posts: "1 publicação a cada 2 dias no Insta, 1/Semana Linkedin",
    calendar: "Criar calendário para próximos 15 dias"
  },
  contentTypes: [
    "Dicas de atendimento no WhatsApp", 
    "Comparativos antes/depois com IA",
    "Bastidores da empresa",
    "Depoimentos de clientes",
    "Estatísticas do mercado",
    "Pesquise concorrentes para mais idéias",
  ],
  objectives: [
    "Aumentar awareness (consciência) da marca",
    "Gerar leads qualificados",
    "Educar o mercado sobre IA no WhatsApp",
    "Fortalecer autoridade no nicho"
  ]
};

export const teamDivision = {
  founder: {
    responsibilities: [
      "Parcerias e distribuidores",
      "Foco em empresas de marketing digital", 
      "Suporte técnico complexo",
      "Ajuda em fechamentos difíceis",
      "Implementação e treinamento pós-venda"
    ],
    rationale: "Remover obstaculos para que o seu caminho seja livre, e pavimentar a estrada. Não permitir que pequenas pedras no caminho façam que a gente deixe de acelerar. Treinamento, resolução de grandes conflitos, fechamento nas primeiras semanas, lidar com leads técnicamente difíceis"
  },
  beatriz: {
    responsibilities: [
      "Prospecção ativa individual", 
      "Qualificação de leads",
      "Agendamento de demos",
      "Follow-up do pipeline",
      "Redes sociais e conteúdo"
    ],
    rationale: "Achar as bolas e chtar no gol. Manter um ciclo constante de novos leads, encontrar e encantar os clientes, além de garantir que a imagem da empresa esteja sempre em movimento, consistente e atrativa"
  }
};

export const prospectionMethodology = {
  day1Setup: [
    "1. Acesso a Linkedin, Insta, TalkerFlow e EsporoCRM",
    "2. Zerar a fila de contatos no CRM",
    "3. Fazer a prospecção de 3 leads de cada segmento, criando já a tarefa para acompanhamento em 2 dias",
    "4. Preparar o calendário de posts para 15 dias (O que precisa?)",
    "5. Fazer o primeiro post"
  ],
  dailyProcess: [
    "1. Pesquisar 30 leads (10 por segmento)",
    "2. Validar critérios básicos",
    "3. Encontrar WhatsApp/LinkedIn da empresa", 
    "4. Primeira abordagem personalizada",
    "5. Registrar no CRM com próxima ação",
    "6. Follow-up leads anteriores (20-25/dia)",
    "7. Agendar e participar de demos",
    "7. Se tiver post no dia, fazer o post"

  ],
  sources: [
    "Google Maps (busca por segmento + cidade)",
    "Sites de empresas locais",
    "LinkedIn e Instagram"
  ]
};

export const compensation = {
  base: "R$ 1.200 fixo mensal",
  bonus: {
    rule: "R$ 100 por cliente fechado além do esperado",
    examples: [
      "4 clientes/mês = R$ 1.200 ",
      "5 clientes/mês = R$ 1.200 + R$ 500 Totalizando R$ 1.700",
      "6 clientes/mês = R$ 1.200 + R$ 600 Totalizando R$ 1.800", 
      "7 clientes/mês = R$ 1.200 + R$ 700 Totalizando  R$ 1.900"
    ]
  },
  target: "Referência: 1 cliente por semana (4/mês)"
};