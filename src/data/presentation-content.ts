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
  "Scripts WhatsApp por Segmento",
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
  "Apêndice: Templates"
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
    response: "Perfeito! Cobrimos noite, finais de semana e picos de demanda. Sua equipe foca no que faz melhor - 1 venda extra já paga tudo."
  },
  {
    objection: "Deve ser muito difícil de configurar",
    response: "É prompt-first! Você escreve como se fosse ChatGPT, temos fluxos prontos para seu segmento e onboarding de 45 min."
  },
  {
    objection: "Não quero prometer números",
    response: "Correto! Medimos tempo de 1ª resposta (de horas para 5s) e agendamentos. Você decide se vale a pena continuar."
  },
  {
    objection: "Muito caro para testar",
    response: "Por isso oferecemos 7 dias de piloto qualificado - R$ 0 de setup. Se não reduzir seu tempo de resposta e não for simples, você não continua."
  }
];

export const crmStages = [
  { stage: "Novo", description: "Lead recém chegado, sem contato" },
  { stage: "Tentativa 1", description: "Primeira tentativa de contato realizada" },
  { stage: "Tentativa 2", description: "Segunda tentativa de contato" },
  { stage: "Conectado/Descoberta", description: "Contato estabelecido, entendendo necessidades" },
  { stage: "Piloto/Demo agendada", description: "Demonstração ou piloto agendado" },
  { stage: "Piloto/Demo realizada", description: "Apresentação finalizada" },
  { stage: "Proposta", description: "Proposta comercial enviada" },
  { stage: "Negociação", description: "Em processo de negociação" },
  { stage: "Fechado Won", description: "Cliente fechado - ganho" },
  { stage: "Fechado Lost", description: "Oportunidade perdida" },
  { stage: "Nutrir", description: "Lead para nutrição futura" }
];

export const sqlChecklist = [
  "✓ WhatsApp como canal principal de atendimento",
  "✓ Pelo menos 20 conversas por dia no WhatsApp", 
  "✓ Dor declarada (demora na resposta, perda de leads, bagunça)",
  "✓ Ticket médio cobre R$ 799 com apenas 1 venda",
  "✓ Decisor presente ou comprometido com o processo"
];

export const weeklyTargets = {
  days: [
    { day: "D1-D2", newLeads: 24, followUps: "10-15", demos: "2-3 agendadas" },
    { day: "D3-D5", newLeads: 30, followUps: "20-25", demos: "3 realizadas/dia" }
  ],
  weekGoal: "10-12 demos, 4-6 pilotos qualificados, 1-3 fechamentos"
};

export const beatrizFunctions = [
  {
    title: "Prospecção Ativa",
    description: "Buscar e qualificar novos clientes para a Talker Flow",
    details: ["Pesquisa de leads nos 3 segmentos", "Primeiro contato via WhatsApp/LinkedIn", "Qualificação inicial usando checklist SQL"]
  },
  {
    title: "Negociação e Fechamento", 
    description: "Conduzir o pipeline de vendas até a assinatura",
    details: ["Agendar demos com prospects qualificados", "Apresentar proposta de valor", "Negociar condições e fechar contratos"]
  },
  {
    title: "Suporte ao Cliente",
    description: "Ajudar clientes que precisam de suporte na plataforma", 
    details: ["Responder dúvidas técnicas básicas", "Escalar problemas complexos", "Garantir satisfação do cliente"]
  },
  {
    title: "Redes Sociais",
    description: "Criar conteúdo e manter presença digital da Talker Flow",
    details: ["1 story por dia no Instagram", "1 publicação a cada 2 semanas", "Calendário de conteúdo para 15 dias"]
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
    name: "Topo do Funil (ToFu)",
    description: "Atração e conscientização do problema",
    actions: ["Conteúdo educativo", "Anúncios de alcance", "SEO e blog"],
    volume: "Alto volume, baixa qualificação"
  },
  meio: {
    name: "Meio do Funil (MoFu)", 
    description: "Consideração e avaliação de soluções",
    actions: ["Cases de sucesso", "Webinars", "Comparativos"],
    volume: "Volume médio, qualificação crescente"
  },
  fundo: {
    name: "Fundo do Funil (BoFu)",
    description: "Decisão de compra",
    actions: ["Demos", "Propostas", "Trials"],
    volume: "Baixo volume, alta qualificação"
  }
};

export const segmentPains = {
  clinicas: {
    experience: "Fui diretor comercial de clínica que faturava R$ 500k/mês por 3 anos",
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
      "Mercado em crescimento pós-pandemia"
    ]
  },
  imobiliarias: {
    experience: "Conheço medianamente o mercado, baixa profissionalização",
    mainPains: [
      "Quem responde primeiro marca a visita",
      "Corretores gerenciam múltiplos números",
      "Leads frios dos portais imobiliários", 
      "Falta de qualificação de prospects"
    ],
    opportunities: [
      "1 aluguel (R$ 2-3k) ou venda (6% de R$ 300-500k) paga ano todo",
      "Mercado pouco profissionalizado = oportunidade",
      "Leads de placa/site precisam resposta rápida",
      "Corretor pode focar no 'taco' presencial"
    ]
  },
  escolas: {
    experience: "Fui diretor comercial de escola particular por 3 anos",
    mainPains: [
      "Pais querem resposta imediata (agosto = pico)",
      "Múltiplos números da escola causam confusão",
      "Perda de leads entre funcionários",
      "Dificuldade para agendar visitas"
    ],
    opportunities: [
      "Período sazonal agosto-novembro = urgência",
      "1 matrícula (R$ 2k/mês) cobre investimento anual",
      "Pais pesquisam múltiplas escolas rapidamente",
      "Automatizar qualificação série/turno/campus"
    ]
  }
};

export const socialMediaPlan = {
  expectations: {
    stories: "1 story por dia mínimo",
    posts: "1 publicação a cada 2 semanas",
    calendar: "Criar calendário para próximos 15 dias"
  },
  contentTypes: [
    "Cases de sucesso de clientes",
    "Dicas de atendimento no WhatsApp", 
    "Comparativos antes/depois com IA",
    "Bastidores da empresa",
    "Depoimentos de clientes",
    "Estatísticas do mercado"
  ],
  objectives: [
    "Aumentar awareness da marca",
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
    rationale: "Marketing digital cria a dor que resolvemos - campanhas geram leads, WhatsApp não dá conta"
  },
  beatriz: {
    responsibilities: [
      "Prospecção ativa individual", 
      "Qualificação de leads",
      "Agendamento de demos",
      "Follow-up do pipeline",
      "Redes sociais e conteúdo"
    ],
    rationale: "Foco na venda direta B2B, construindo pipeline consistente"
  }
};

export const prospectionMethodology = {
  day1Setup: [
    "1. Configurar perfil LinkedIn otimizado",
    "2. Instalar extensões: Apollo, Sales Navigator",
    "3. Configurar listas no Google Maps por segmento",
    "4. Preparar templates de WhatsApp e LinkedIn",
    "5. Configurar CRM com campos obrigatórios"
  ],
  dailyProcess: [
    "1. Pesquisar 30 leads (10 por segmento)",
    "2. Validar critérios SQL básicos",
    "3. Encontrar WhatsApp/LinkedIn da empresa", 
    "4. Primeira abordagem personalizada",
    "5. Registrar no CRM com próxima ação",
    "6. Follow-up leads anteriores (20-25/dia)",
    "7. Agendar demos qualificadas"
  ],
  sources: [
    "Google Maps (busca por segmento + cidade)",
    "LinkedIn Sales Navigator",
    "Instagram business profiles",
    "Sites de empresas locais",
    "Indicações de clientes atuais"
  ]
};

export const compensation = {
  base: "R$ 1.200 fixo mensal",
  bonus: {
    rule: "R$ 100 por cliente fechado (acima de 4/mês)",
    examples: [
      "4 clientes/mês = R$ 1.200 (sem bônus)",
      "5 clientes/mês = R$ 1.200 + R$ 500 = R$ 1.700",
      "6 clientes/mês = R$ 1.200 + R$ 600 = R$ 1.800", 
      "7 clientes/mês = R$ 1.200 + R$ 700 = R$ 1.900"
    ]
  },
  target: "Meta: Fechar pelo menos 1 cliente por semana (4/mês minimum)"
};