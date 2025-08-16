export const slideTitles = [
  "Talker Flow Comercial — Semana 1",
  "Visão do Produto e Diferencial",
  "ICP e Segmentos Foco",
  "Proposta de Valor e Oferta",
  "Funil no EspoCRM",
  "Rotina Diária de Prospecção",
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