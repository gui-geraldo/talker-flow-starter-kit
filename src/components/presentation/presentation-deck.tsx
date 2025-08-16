import { useState } from "react";
import { PresentationSlide } from "@/components/ui/presentation-slide";
import { SlideTitle } from "@/components/ui/slide-title";
import { SlideSubtitle } from "@/components/ui/slide-subtitle";
import { SlideNavigation } from "./slide-navigation";
import { MetricCard } from "@/components/ui/metric-card";
import { FeatureGrid } from "@/components/ui/feature-grid";
import { ScriptTemplate } from "./script-template";
import { PlaybookFlow } from "./playbook-flow";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Clock, 
  Target, 
  TrendingUp, 
  Users, 
  CheckCircle,
  Zap,
  Bot,
  Globe,
  Shield
} from "lucide-react";
import { slideTitles, whatsappScripts, objections, crmStages, sqlChecklist, weeklyTargets } from "@/data/presentation-content";

export const PresentationDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slideTitles.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const slides = [
    // Slide 1: Capa
    <PresentationSlide key={0} background="gradient">
      <div className="text-center">
        <SlideTitle className="mb-8">
          Talker Flow
          <br />
          <span className="text-4xl">Treinamento Comercial</span>
        </SlideTitle>
        <SlideSubtitle className="mb-12">
          Semana 1: De 0 a Vendedor em 48 horas
        </SlideSubtitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <MetricCard
            title="Segmentos Foco"
            value="3"
            description="Clínicas → Escolas → Imobiliárias"
            variant="primary"
            icon={<Target />}
          />
          <MetricCard
            title="Meta Semana 1"
            value="10-12"
            description="Demos agendadas"
            variant="success"
            icon={<TrendingUp />}
          />
          <MetricCard
            title="Fechamentos"
            value="1-3"
            description="Novos clientes"
            variant="whatsapp"
            icon={<CheckCircle />}
          />
        </div>
      </div>
    </PresentationSlide>,

    // Slide 2: Visão do Produto
    <PresentationSlide key={1}>
      <SlideTitle>Visão do Produto e Diferencial</SlideTitle>
      <SlideSubtitle>WhatsApp Inteligente que Vende Sozinho</SlideSubtitle>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-primary">O que é o Talker Flow?</h3>
          <div className="space-y-4 text-lg">
            <p>• Organizamos e automatizamos o WhatsApp com IA</p>
            <p>• Resposta em ~5 segundos, 24/7</p>
            <p>• Múltiplos atendentes e números</p>
            <p>• Roteamento inteligente</p>
            <p>• Botão "Desativar IA" para controle total</p>
            <p>• Entende áudio, conversa em 24 idiomas</p>
            <p>• Integra via webhook com qualquer sistema</p>
          </div>
        </div>
        
        <FeatureGrid
          features={[
            {
              title: "Resposta Instantânea",
              description: "De horas para 5 segundos",
              icon: <Zap className="text-primary" />
            },
            {
              title: "IA Humanizada", 
              description: "Conversa natural, até por áudio",
              icon: <Bot className="text-accent" />
            },
            {
              title: "24/7 Global",
              description: "Atende em 24 idiomas",
              icon: <Globe className="text-success" />
            },
            {
              title: "Controle Total",
              description: "Assuma quando quiser",
              icon: <Shield className="text-whatsapp" />
            }
          ]}
          columns={2}
        />
      </div>
      
      <div className="bg-gradient-primary p-6 rounded-lg text-white text-center">
        <h4 className="text-xl font-bold mb-2">Proposta de Valor Única</h4>
        <p className="text-lg opacity-90">
          "Organizamos e automatizamos o WhatsApp com IA, resposta em ~5s, 24/7, 
          múltiplos atendentes e números, roteamento, botão 'Desativar IA' para assumir manualmente"
        </p>
      </div>
    </PresentationSlide>,

    // Slide 3: ICP e Segmentos
    <PresentationSlide key={2}>
      <SlideTitle>ICP e Segmentos Foco</SlideTitle>
      <SlideSubtitle>Cliente Ideal: ≥ R$ 50k/mês, ≥ 20 conversas/dia no WhatsApp</SlideSubtitle>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="p-6 border-emerald-500 bg-emerald-50">
          <h3 className="text-xl font-bold mb-4 text-emerald-800">🦷 Clínicas</h3>
          <div className="space-y-3 text-emerald-700">
            <p><strong>Prioridade:</strong> Odontologia, Estética</p>
            <p><strong>Ticket:</strong> R$ 2-4k por consulta</p>
            <p><strong>ROI:</strong> 1 paciente/mês paga tudo</p>
            <p><strong>Dor:</strong> Perdem agendamentos fora do horário</p>
          </div>
          <div className="mt-4 bg-emerald-100 p-3 rounded text-sm text-emerald-800">
            "Só quem manda mensagem à noite/fim de semana já paga a plataforma"
          </div>
        </Card>

        <Card className="p-6 border-orange-500 bg-orange-50">
          <h3 className="text-xl font-bold mb-4 text-orange-800">🏠 Imobiliárias</h3>
          <div className="space-y-3 text-orange-700">
            <p><strong>Foco:</strong> Locação + Venda</p>
            <p><strong>Comissão:</strong> 1 aluguel = R$ 2-3k</p>
            <p><strong>Vendas:</strong> 6% sobre R$ 300-500k</p>
            <p><strong>Dor:</strong> Quem responde primeiro fecha</p>
          </div>
          <div className="mt-4 bg-orange-100 p-3 rounded text-sm text-orange-800">
            "Mercado pouco profissionalizado, resposta lenta perde venda"
          </div>
        </Card>

        <Card className="p-6 border-purple-500 bg-purple-50">
          <h3 className="text-xl font-bold mb-4 text-purple-800">🎓 Escolas</h3>
          <div className="space-y-3 text-purple-700">
            <p><strong>Período:</strong> Ago-Nov (captação)</p>
            <p><strong>Mensalidade:</strong> ~R$ 2k</p>
            <p><strong>ROI:</strong> 1 matrícula/mês cobre</p>
            <p><strong>Dor:</strong> Pais querem resposta imediata</p>
          </div>
          <div className="mt-4 bg-purple-100 p-3 rounded text-sm text-purple-800">
            "Estamos em agosto - pico da procura por matrículas 2025"
          </div>
        </Card>
      </div>
    </PresentationSlide>,

    // Slide 4: Proposta de Valor e Oferta
    <PresentationSlide key={3} background="primary">
      <SlideTitle>Proposta de Valor e Oferta</SlideTitle>
      <SlideSubtitle>Investimento que se paga com 1 venda extra</SlideSubtitle>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-6">Oferta Irresistível</h3>
          <div className="space-y-6 text-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">R$</span>
              </div>
              <div>
                <div className="font-bold">R$ 799/mês</div>
                <div className="opacity-80">Plano ilimitado</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <div className="font-bold">Setup R$ 0</div>
                <div className="opacity-80">Sem taxa de implantação</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">⏱️</span>
              </div>
              <div>
                <div className="font-bold">7 dias de piloto</div>
                <div className="opacity-80">Só para leads qualificados</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 p-8 rounded-lg">
          <h4 className="text-2xl font-bold mb-6">ROI por Segmento</h4>
          <div className="space-y-4">
            <div>
              <div className="font-semibold">🦷 Clínicas</div>
              <div className="opacity-90">1 paciente (R$ 2-4k) = 3-5x o investimento</div>
            </div>
            <div>
              <div className="font-semibold">🏠 Imobiliárias</div>
              <div className="opacity-90">1 aluguel ou venda = ano todo pago</div>
            </div>
            <div>
              <div className="font-semibold">🎓 Escolas</div>
              <div className="opacity-90">1 matrícula (R$ 2k) = 2.5x o investimento</div>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 5: Funil CRM
    <PresentationSlide key={4}>
      <SlideTitle>Funil no EspoCRM</SlideTitle>
      <SlideSubtitle>Pipeline estruturado para máxima conversão</SlideSubtitle>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Estágios do Pipeline</h3>
          <div className="space-y-3">
            {crmStages.map((stage, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gradient-card rounded-lg border">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div>
                  <div className="font-semibold">{stage.stage}</div>
                  <div className="text-sm text-muted-foreground">{stage.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Campos Obrigatórios</h3>
          <div className="bg-muted p-4 rounded-lg mb-6">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>• Segmento</div>
              <div>• Subnicho</div>
              <div>• Cidade/UF</div>
              <div>• Volume WA/dia</div>
              <div>• Nº atendentes</div>
              <div>• Faturamento</div>
              <div>• Decisor</div>
              <div>• Origem</div>
              <div>• Link WhatsApp</div>
              <div>• Próxima ação</div>
              <div>• Status (Quente/Morno/Frio)</div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-4">Checklist SQL</h3>
          <div className="space-y-2">
            {sqlChecklist.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>{item.replace('✓ ', '')}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 6: Rotina Diária
    <PresentationSlide key={5}>
      <SlideTitle>Rotina Diária de Prospecção</SlideTitle>
      <SlideSubtitle>Cadência estruturada para resultados previsíveis</SlideSubtitle>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4 text-primary">Dias 1-2: Aquecimento</h3>
          <div className="space-y-4">
            <MetricCard
              title="Novos Leads/Dia"
              value="24"
              description="8 por segmento"
              icon={<Users />}
            />
            <MetricCard
              title="Follow-ups/Dia"
              value="10-15"
              description="Contatos anteriores"
              icon={<MessageCircle />}
            />
            <MetricCard
              title="Demos Agendadas"
              value="2-3"
              description="Para o founder"
              icon={<Target />}
            />
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4 text-success">Dias 3-5: Aceleração</h3>
          <div className="space-y-4">
            <MetricCard
              title="Novos Leads/Dia"
              value="30"
              description="10 por segmento"
              icon={<Users />}
              variant="success"
            />
            <MetricCard
              title="Follow-ups/Dia"
              value="20-25"
              description="Pipeline aquecido"
              icon={<MessageCircle />}
              variant="success"
            />
            <MetricCard
              title="Demos/Dia"
              value="3"
              description="Conduzidas pelo founder"
              icon={<Target />}
              variant="success"
            />
          </div>
        </Card>
      </div>
      
      <div className="mt-8 bg-gradient-primary p-6 rounded-lg text-white text-center">
        <h4 className="text-xl font-bold mb-2">Meta da Semana 1</h4>
        <p className="text-lg">{weeklyTargets.weekGoal}</p>
      </div>
    </PresentationSlide>,

    // Slide 7: Métricas Norte
    <PresentationSlide key={6} background="gradient">
      <SlideTitle>Métricas Norte</SlideTitle>
      <SlideSubtitle>O que medir para garantir o sucesso</SlideSubtitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <MetricCard
          title="Tempo 1ª Resposta"
          value="≤5s"
          description="De horas para segundos"
          icon={<Clock />}
          variant="primary"
        />
        <MetricCard
          title="Agendamentos/Dia"
          value="2-3"
          description="Demos qualificadas"
          icon={<Target />}
          variant="success"
        />
        <MetricCard
          title="Taxa No-Show"
          value="<20%"
          description="Com lembretes automáticos"
          icon={<CheckCircle />}
          variant="whatsapp"
        />
        <MetricCard
          title="Demos/Semana"
          value="10-12"
          description="Pipeline aquecido"
          icon={<TrendingUp />}
          variant="primary"
        />
      </div>
      
      <div className="bg-white/10 p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-6">Estudos Speed-to-Lead</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">7x</div>
            <div className="opacity-90">mais chances de conectar se responder em 1 minuto vs 1 hora</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50x</div>
            <div className="opacity-90">mais chances se responder em 5 min vs 30 min</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">80%</div>
            <div className="opacity-90">dos leads escolhem quem responde primeiro</div>
          </div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 8: Scripts WhatsApp
    <PresentationSlide key={7}>
      <SlideTitle>Scripts WhatsApp por Segmento</SlideTitle>
      <SlideSubtitle>Templates testados e aprovados</SlideSubtitle>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ScriptTemplate
          title="Primeira Abordagem - Clínicas"
          segment="clinicas"
          channel="whatsapp"
          script={whatsappScripts.clinicas.initial}
        />
        <ScriptTemplate
          title="Primeira Abordagem - Imobiliárias"
          segment="imobiliarias"
          channel="whatsapp"
          script={whatsappScripts.imobiliarias.initial}
        />
        <ScriptTemplate
          title="Primeira Abordagem - Escolas"
          segment="escolas"
          channel="whatsapp"
          script={whatsappScripts.escolas.initial}
        />
      </div>

      <div className="mt-8 bg-muted p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-4">Dicas de Uso</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>• Personalize com o nome da empresa quando possível</div>
          <div>• Use emojis relacionados ao segmento</div>
          <div>• Sempre termine com pergunta para engajar</div>
          <div>• Mencione o ROI específico do segmento</div>
          <div>• Ofereça piloto apenas para leads qualificados</div>
          <div>• Responda objeções com casos de uso reais</div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 9: Objeções & Respostas
    <PresentationSlide key={8}>
      <SlideTitle>Objeções & Respostas</SlideTitle>
      <SlideSubtitle>Como lidar com as 5 objeções mais comuns</SlideSubtitle>
      
      <div className="space-y-6">
        {objections.map((item, index) => (
          <Card key={index} className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-destructive mb-2">❌ Objeção</h3>
                <p className="text-muted-foreground italic">"{item.objection}"</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-success mb-2">✅ Resposta</h3>
                <p>{item.response}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 bg-gradient-primary p-6 rounded-lg text-white text-center">
        <h4 className="text-xl font-bold mb-2">Lembre-se</h4>
        <p className="text-lg opacity-90">
          Sempre volte ao ROI: "1 venda extra paga o ano todo" + "7 dias de piloto para provar"
        </p>
      </div>
    </PresentationSlide>,

    // Slide 10: Playbook Clínicas
    <PresentationSlide key={9}>
      <SlideTitle>Playbook Clínicas</SlideTitle>
      <SlideSubtitle>Fluxo mínimo viável para agendamentos</SlideSubtitle>
      
      <PlaybookFlow
        title="Fluxo de Atendimento - Clínicas"
        segment="clinicas"
        steps={[
          {
            title: "Saudação Personalizada",
            description: "Apresentação da clínica e identificação da necessidade",
            automation: true,
            examples: ["Primeira consulta?", "Qual especialidade?", "Dor específica?"]
          },
          {
            title: "Qualificação da Especialidade",
            description: "Direciona para o profissional correto",
            automation: true,
            examples: ["Ortodontia", "Implantes", "Clínico geral", "Emergência"]
          },
          {
            title: "Coleta de Dados",
            description: "Nome, telefone, idade, convênio/particular",
            automation: true,
            examples: ["Nome completo", "Telefone", "Tem convênio?"]
          },
          {
            title: "Oferta de Horários",
            description: "Consulta agenda disponível e oferece opções",
            automation: true,
            examples: ["Manhã/tarde", "Esta semana/próxima", "Urgente?"]
          },
          {
            title: "Confirmação de Agendamento",
            description: "Confirma dados e envia informações da consulta",
            automation: true,
            examples: ["Endereço", "Documentos necessários", "Valor"]
          },
          {
            title: "Lembrete Automático",
            description: "24h antes e 2h antes da consulta",
            automation: true,
            examples: ["Lembrete 24h", "Confirmação 2h antes"]
          },
          {
            title: "Pós-Consulta",
            description: "Satisfação, retorno e indicações",
            automation: true,
            examples: ["Como foi?", "Próximo retorno", "Indique amigos"]
          }
        ]}
      />
    </PresentationSlide>,

    // Slide 11: Playbook Imobiliárias
    <PresentationSlide key={10}>
      <SlideTitle>Playbook Imobiliárias</SlideTitle>
      <SlideSubtitle>Fluxo otimizado para visitas e fechamentos</SlideSubtitle>
      
      <PlaybookFlow
        title="Fluxo de Atendimento - Imobiliárias"
        segment="imobiliarias"
        steps={[
          {
            title: "Identificação do Interesse",
            description: "Compra, locação ou investimento",
            automation: true,
            examples: ["Comprar", "Alugar", "Investir", "Primeira casa"]
          },
          {
            title: "Qualificação Geográfica",
            description: "Bairro, região, proximidade de pontos importantes",
            automation: true,
            examples: ["Bairro preferido", "Perto do trabalho", "Transporte público"]
          },
          {
            title: "Filtros Financeiros",
            description: "Faixa de preço, forma de pagamento, renda",
            automation: true,
            examples: ["Até quanto?", "À vista/financiado", "Renda comprovada"]
          },
          {
            title: "Tipo e Características",
            description: "Casa/apto, quartos, garagem, área",
            automation: true,
            examples: ["Casa ou apto", "Quantos quartos", "Precisa garagem"]
          },
          {
            title: "Envio de Opções",
            description: "3 melhores opções com fotos, preço e localização",
            automation: true,
            examples: ["Opção A, B, C", "Fotos e detalhes", "Localização"]
          },
          {
            title: "Agendamento de Visita",
            description: "Conecta com corretor e agenda horário",
            automation: true,
            examples: ["Manhã/tarde", "Final de semana", "Corretor João"]
          },
          {
            title: "Follow-up e Proposta",
            description: "Após visita, negocia condições e documenta proposta",
            automation: false,
            examples: ["Como foi a visita?", "Quer fazer proposta?", "Documentos"]
          }
        ]}
      />
    </PresentationSlide>,

    // Slide 12: Playbook Escolas
    <PresentationSlide key={11}>
      <SlideTitle>Playbook Escolas</SlideTitle>
      <SlideSubtitle>Captação eficiente de matrículas</SlideSubtitle>
      
      <PlaybookFlow
        title="Fluxo de Atendimento - Escolas"
        segment="escolas"
        steps={[
          {
            title: "Identificação da Série",
            description: "Série/ano do aluno e idade",
            automation: true,
            examples: ["Qual série?", "Idade do aluno", "Primeira matrícula?"]
          },
          {
            title: "Campus e Período",
            description: "Unidade desejada e turno preferido",
            automation: true,
            examples: ["Qual unidade?", "Manhã/tarde", "Integral?"]
          },
          {
            title: "Agendamento de Visita",
            description: "Convida para conhecer a escola",
            automation: true,
            examples: ["Visita guiada", "Conversa com coordenação", "Esta semana?"]
          },
          {
            title: "Lembretes de Visita",
            description: "Confirma presença e envia localização",
            automation: true,
            examples: ["Lembrete 24h", "Endereço", "Confirma presença"]
          },
          {
            title: "Checklist de Documentos",
            description: "Lista documentos necessários para matrícula",
            automation: true,
            examples: ["RG", "CPF", "Comprovante renda", "Histórico"]
          },
          {
            title: "Boas-vindas",
            description: "Após matrícula, integra família à comunidade escolar",
            automation: true,
            examples: ["Bem-vindos!", "Grupos WhatsApp", "Calendário escolar"]
          }
        ]}
      />
    </PresentationSlide>,

    // Slide 13: Roteiro Micro-Demo
    <PresentationSlide key={12}>
      <SlideTitle>Roteiro Micro-Demo</SlideTitle>
      <SlideSubtitle>15 minutos para demonstrar o valor</SlideSubtitle>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Estrutura da Demo</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <div className="font-semibold">Abertura (2 min)</div>
                <div className="text-sm text-muted-foreground">Apresentação e contexto</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <div className="font-semibold">Problema (3 min)</div>
                <div className="text-sm text-muted-foreground">Dor atual do cliente</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <div className="font-semibold">Solução (8 min)</div>
                <div className="text-sm text-muted-foreground">Demo ao vivo da plataforma</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <div className="font-semibold">Fechamento (2 min)</div>
                <div className="text-sm text-muted-foreground">Proposta e próximos passos</div>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Pontos-Chave da Demo</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Mostrar conversa real com IA</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Demonstrar botão "Desativar IA"</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Resposta em 5 segundos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Múltiplos atendentes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Roteamento inteligente</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Integração webhook</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>24 idiomas e áudio</span>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="mt-8 bg-gradient-primary p-6 rounded-lg text-white">
        <h4 className="text-xl font-bold mb-4">Script de Fechamento</h4>
        <p className="text-lg italic">
          "Plano R$ 799/mês, setup R$ 0. Começamos agora com piloto 7 dias no seu número. 
          Se não reduzir 1ª resposta para segundos e não for simples para seu time, você não continua."
        </p>
      </div>
    </PresentationSlide>,

    // Slide 14: Proposta de 1 Página
    <PresentationSlide key={13}>
      <SlideTitle>Modelo de Proposta</SlideTitle>
      <SlideSubtitle>Template para fechamento imediato</SlideSubtitle>
      
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 bg-gradient-card">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-2">Proposta Talker Flow</h2>
            <p className="text-muted-foreground">WhatsApp Inteligente que Vende Sozinho</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">O que está incluído:</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>IA treinada para seu negócio</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Resposta em ~5 segundos, 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Múltiplos atendentes e números</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Controle total (botão desativar)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Integração via webhook</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Suporte e treinamento</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Investimento:</h3>
              <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center mb-4">
                <div className="text-3xl font-bold">R$ 799</div>
                <div className="text-lg opacity-90">por mês</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success mb-2">Setup R$ 0</div>
                <div className="text-muted-foreground">Sem taxa de implantação</div>
              </div>
            </div>
          </div>
          
          <div className="bg-success text-success-foreground p-6 rounded-lg text-center mb-8">
            <h4 className="text-xl font-bold mb-2">Piloto de 7 Dias</h4>
            <p>Testamos no seu WhatsApp real. Se não funcionar, você não paga nada.</p>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="text-lg px-8 py-4">
              Começar Piloto Agora
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Ativação em 45 minutos
            </p>
          </div>
        </Card>
      </div>
    </PresentationSlide>,

    // Slide 15: Plano Semana 1
    <PresentationSlide key={14}>
      <SlideTitle>Plano Semana 1</SlideTitle>
      <SlideSubtitle>Cronograma detalhado por dia</SlideSubtitle>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4 text-primary">Segunda & Terça (D1-D2)</h3>
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Manhã (8h-12h)</h4>
              <ul className="text-sm space-y-1">
                <li>• Setup EspoCRM e campos</li>
                <li>• 12 novos leads (4 por segmento)</li>
                <li>• 5-8 follow-ups</li>
              </ul>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Tarde (13h-17h)</h4>
              <ul className="text-sm space-y-1">
                <li>• 12 novos leads (4 por segmento)</li>
                <li>• 5-7 follow-ups</li>
                <li>• 1-2 micro-demos agendadas</li>
              </ul>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4 text-success">Quarta à Sexta (D3-D5)</h3>
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Manhã (8h-12h)</h4>
              <ul className="text-sm space-y-1">
                <li>• 15 novos leads (5 por segmento)</li>
                <li>• 10-12 follow-ups</li>
                <li>• 1 demo com founder</li>
              </ul>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Tarde (13h-17h)</h4>
              <ul className="text-sm space-y-1">
                <li>• 15 novos leads (5 por segmento)</li>
                <li>• 10-13 follow-ups</li>
                <li>• 2 demos com founder</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Total Novos Leads"
          value="134"
          description="Semana completa"
          icon={<Users />}
          variant="primary"
        />
        <MetricCard
          title="Follow-ups"
          value="80-95"
          description="Pipeline aquecido"
          icon={<MessageCircle />}
          variant="success"
        />
        <MetricCard
          title="Demos Realizadas"
          value="10-12"
          description="Com founder"
          icon={<Target />}
          variant="whatsapp"
        />
      </div>
    </PresentationSlide>,

    // Slide 16: Próximos Passos
    <PresentationSlide key={15}>
      <SlideTitle>Próximos Passos</SlideTitle>
      <SlideSubtitle>Checklist de implementação</SlideSubtitle>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4 text-primary">Implementação Imediata</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Configurar EspoCRM com campos obrigatórios</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Importar scripts para fácil acesso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Preparar listas de prospecção por segmento</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Definir horários de prospecção</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Treinar resposta a objeções</span>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4 text-accent">Métricas de Acompanhamento</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-2 bg-muted rounded">
              <span className="text-sm">Novos leads/dia</span>
              <Badge variant="outline">24-30</Badge>
            </div>
            <div className="flex justify-between items-center p-2 bg-muted rounded">
              <span className="text-sm">Taxa de resposta</span>
              <Badge variant="outline">≥15%</Badge>
            </div>
            <div className="flex justify-between items-center p-2 bg-muted rounded">
              <span className="text-sm">Demos agendadas</span>
              <Badge variant="outline">2-3/dia</Badge>
            </div>
            <div className="flex justify-between items-center p-2 bg-muted rounded">
              <span className="text-sm">Taxa de conversão demo → piloto</span>
              <Badge variant="outline">≥40%</Badge>
            </div>
            <div className="flex justify-between items-center p-2 bg-muted rounded">
              <span className="text-sm">Taxa de fechamento</span>
              <Badge variant="outline">≥25%</Badge>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="mt-8 bg-gradient-primary p-6 rounded-lg text-white text-center">
        <h4 className="text-xl font-bold mb-4">Pronto para Começar?</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="secondary" size="lg" className="text-primary">
            Download Scripts
          </Button>
          <Button variant="secondary" size="lg" className="text-primary">
            Templates CRM
          </Button>
          <Button variant="secondary" size="lg" className="text-primary">
            Planilha Métricas
          </Button>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 17: Apêndice Speed-to-Lead
    <PresentationSlide key={16}>
      <SlideTitle>Apêndice: Estudos Speed-to-Lead</SlideTitle>
      <SlideSubtitle>Por que velocidade de resposta é crítica</SlideSubtitle>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Pesquisa Harvard Business Review</h3>
          <div className="space-y-4">
            <div className="text-center p-4 bg-primary text-primary-foreground rounded-lg">
              <div className="text-4xl font-bold">7x</div>
              <div className="text-sm opacity-90">mais chances de qualificar o lead</div>
            </div>
            <p className="text-sm text-muted-foreground">
              Empresas que respondem em até 1 minuto têm 7x mais chances de qualificar o lead 
              em comparação com aquelas que respondem em 1 hora.
            </p>
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Estudo Lead Response Management</h3>
          <div className="space-y-4">
            <div className="text-center p-4 bg-success text-success-foreground rounded-lg">
              <div className="text-4xl font-bold">50x</div>
              <div className="text-sm opacity-90">mais chances de conectar</div>
            </div>
            <p className="text-sm text-muted-foreground">
              Leads contatados em 5 minutos vs 30 minutos têm 50x mais chances de conectar
              e 9x mais chances de converter.
            </p>
          </div>
        </Card>
      </div>
      
      <div className="bg-gradient-card p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4 text-center">Comportamento do Consumidor</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-destructive mb-2">78%</div>
            <div className="text-sm">dos consumidores compram da primeira empresa que responde</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">5min</div>
            <div className="text-sm">é o tempo máximo que 67% esperam por uma resposta</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-success mb-2">35%</div>
            <div className="text-sm">abandonam após 3 minutos sem resposta</div>
          </div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 18: Apêndice Templates
    <PresentationSlide key={17}>
      <SlideTitle>Apêndice: Templates Copiáveis</SlideTitle>
      <SlideSubtitle>Scripts prontos para usar</SlideSubtitle>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ScriptTemplate
            title="Follow-up 24h - Clínicas"
            segment="clinicas"
            channel="whatsapp"
            script="Oi! Viu minha mensagem sobre automatizar seu WhatsApp? Reduzimos o tempo de resposta para 5 segundos e aumentamos agendamentos. Vale 15 min para conhecer?"
            variant="followup"
          />
          <ScriptTemplate
            title="Follow-up 24h - Imobiliárias"
            segment="imobiliarias"
            channel="whatsapp"
            script="Oi! Sobre automatizar seu atendimento imobiliário - quantas visitas você perde por responder tarde? Nossa IA responde em 5s e agenda na hora."
            variant="followup"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ScriptTemplate
            title="Follow-up 24h - Escolas"
            segment="escolas"
            channel="whatsapp"
            script="Oi! Sobre automatizar a captação de matrículas - estamos em agosto, pico da procura. Nossa IA qualifica e agenda visitas 24/7. Podemos conversar?"
            variant="followup"
          />
          <ScriptTemplate
            title="Objeção IA - Universal"
            segment="clinicas"
            channel="whatsapp"
            script="Entendo a preocupação! Nossa IA é treinada com seu vocabulário e tem botão 'Desativar IA' - você assume quando quiser. Conversa até em áudio e 24 idiomas!"
            variant="objection"
          />
        </div>
      </div>
      
      <div className="mt-8 bg-muted p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-4">Como Usar os Templates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>✅ Personalize com nome da empresa</div>
          <div>✅ Adapte para o contexto específico</div>
          <div>✅ Mantenha tom humanizado</div>
          <div>✅ Sempre termine com pergunta</div>
          <div>✅ Use dados específicos do segmento</div>
          <div>✅ Ofereça valor imediato</div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 19: Encerramento
    <PresentationSlide key={18} background="gradient">
      <div className="text-center">
        <SlideTitle className="mb-8">
          Pronto para Transformar
          <br />
          <span className="text-accent">Leads em Vendas?</span>
        </SlideTitle>
        <SlideSubtitle className="mb-12">
          Semana 1 começa agora. Vamos fazer história!
        </SlideSubtitle>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-3xl mb-2">🎯</div>
            <div className="font-bold mb-2">Foco Total</div>
            <div className="text-sm opacity-90">3 segmentos, 1 objetivo: vender</div>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-3xl mb-2">🚀</div>
            <div className="font-bold mb-2">Execução</div>
            <div className="text-sm opacity-90">Scripts, métricas e processos prontos</div>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-3xl mb-2">💰</div>
            <div className="font-bold mb-2">Resultados</div>
            <div className="text-sm opacity-90">10-12 demos, 1-3 fechamentos</div>
          </div>
        </div>
        
        <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Lembre-se</h3>
          <p className="text-lg opacity-90 mb-6">
            "R$ 799/mês se paga com 1 venda extra. Com Talker Flow respondendo em 5 segundos, 
            você nunca mais vai perder um lead por demora na resposta."
          </p>
          <Button size="lg" variant="secondary" className="text-primary text-lg">
            Vamos Começar! 🔥
          </Button>
        </div>
      </div>
    </PresentationSlide>
  ];

  return (
    <div className="min-h-screen">
      {slides[currentSlide]}
      
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slideTitles.length}
        slideTitle={slideTitles[currentSlide]}
        onNext={nextSlide}
        onPrevious={prevSlide}
        onSlideSelect={goToSlide}
      />
    </div>
  );
};