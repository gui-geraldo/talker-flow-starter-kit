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
import { WhatsAppDemo } from "@/components/ui/whatsapp-demo";
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
  Shield,
  UserCheck,
  DollarSign,
  Calendar,
  Heart,
  Search,
  Phone,
  Mail,
  Instagram
} from "lucide-react";
import { 
  slideTitles, 
  whatsappScripts, 
  objections, 
  crmStages, 
  sqlChecklist, 
  weeklyTargets,
  beatrizFunctions,
  commercialBasics,
  funnelStages,
  segmentPains,
  socialMediaPlan,
  teamDivision,
  prospectionMethodology,
  compensation,
  emailScripts
} from "@/data/presentation-content";

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

    // Slide 2: Bem-vinda Beatriz
    <PresentationSlide key={1} background="primary">
      <div className="text-center">
        <SlideTitle className="mb-8">
          Bem-vinda, Beatriz! 🎉
        </SlideTitle>
        <SlideSubtitle className="mb-12">
          Sua jornada comercial na Talker Flow começa agora
        </SlideSubtitle>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white/10 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Esta é sua primeira experiência comercial</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              Você está prestes a entrar no mundo das vendas B2B, aprendendo conceitos fundamentais,
              técnicas de prospecção e como converter leads em clientes fiéis da Talker Flow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-3">🎯 Seu Objetivo</h4>
              <p className="opacity-90">
                Dominar as 4 funções principais e se tornar uma vendedora 
                confiante e eficaz em menos de 1 semana.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-3">💪 Nossa Missão</h4>
              <p className="opacity-90">
                Te dar todas as ferramentas, conhecimentos e suporte 
                para você ter sucesso desde o primeiro dia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 3: 4 Funções Principais
    <PresentationSlide key={2}>
      <SlideTitle>Suas 4 Funções Principais</SlideTitle>
      <SlideSubtitle>O que você fará no dia a dia na Talker Flow</SlideSubtitle>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {beatrizFunctions.map((func, index) => (
          <Card key={index} className="p-6 border-l-4 border-l-primary">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold">{func.title}</h3>
                <p className="text-muted-foreground">{func.description}</p>
              </div>
            </div>
            <div className="space-y-2">
              {func.details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm">{detail}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </PresentationSlide>,

    // Slide 4: Conceitos Comerciais Básicos - Parte 1
    <PresentationSlide key={3} background="gradient">
      <SlideTitle>Conceitos Comerciais Básicos - Parte 1</SlideTitle>
      <SlideSubtitle>Fundamentos que todo vendedor precisa saber</SlideSubtitle>
      
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-6 bg-white/10 border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-10 h-10 text-success" />
              <h3 className="text-2xl font-bold text-white">ROI</h3>
            </div>
            <div className="space-y-3 text-white">
              <p className="font-semibold">{commercialBasics.roi.definition}</p>
              <p className="text-sm opacity-90">{commercialBasics.roi.formula}</p>
              <div className="bg-success/20 p-3 rounded text-sm">
                <strong>Exemplo:</strong> {commercialBasics.roi.example}
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/10 border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-10 h-10 text-primary" />
              <h3 className="text-2xl font-bold text-white">CAC</h3>
            </div>
            <div className="space-y-3 text-white">
              <p className="font-semibold">{commercialBasics.cac.definition}</p>
              <p className="text-sm opacity-90">{commercialBasics.cac.formula}</p>
              <div className="bg-primary/20 p-3 rounded text-sm">
                <strong>Exemplo:</strong> {commercialBasics.cac.example}
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/10 border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-10 h-10 text-accent" />
              <h3 className="text-2xl font-bold text-white">LTV</h3>
            </div>
            <div className="space-y-3 text-white">
              <p className="font-semibold">{commercialBasics.ltv.definition}</p>
              <p className="text-sm opacity-90">{commercialBasics.ltv.formula}</p>
              <div className="bg-accent/20 p-3 rounded text-sm">
                <strong>Exemplo:</strong> {commercialBasics.ltv.example}
              </div>
            </div>
          </Card>
        </div>
        
        <div className="bg-white/5 p-6 rounded-lg text-center text-white">
          <h4 className="text-xl font-bold mb-3">Por que isso importa?</h4>
          <p className="text-lg opacity-90">
            Você precisa falar a linguagem dos clientes. Eles pensam em ROI, CAC e LTV o tempo todo.
            Dominando estes conceitos, você consegue ter conversas mais profundas e técnicas.
          </p>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 5: Conceitos Comerciais Básicos - Parte 2
    <PresentationSlide key={4}>
      <SlideTitle>Conceitos Comerciais Básicos - Parte 2</SlideTitle>
      <SlideSubtitle>Entendendo o comportamento de compra B2B</SlideSubtitle>
      
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 text-primary">Jornada de Compra B2B</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <div className="font-semibold">Reconhecimento do Problema</div>
                  <div className="text-sm text-muted-foreground">Cliente percebe que tem uma dor</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <div className="font-semibold">Pesquisa de Soluções</div>
                  <div className="text-sm text-muted-foreground">Busca alternativas no mercado</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <div className="font-semibold">Avaliação de Fornecedores</div>
                  <div className="text-sm text-muted-foreground">Compara opções e negocia</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-success text-success-foreground rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <div>
                  <div className="font-semibold">Decisão de Compra</div>
                  <div className="text-sm text-muted-foreground">Escolhe e fecha o contrato</div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 text-success">Diferenças B2B vs B2C</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-success">B2B (nosso foco)</h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• Decisão racional baseada em ROI</li>
                  <li>• Múltiplos decisores envolvidos</li>
                  <li>• Ciclo de vendas mais longo</li>
                  <li>• Relacionamento de longo prazo</li>
                  <li>• Ticket médio mais alto</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-muted-foreground">B2C (referência)</h4>
                <ul className="text-sm space-y-1 mt-2 text-muted-foreground">
                  <li>• Decisão emocional + racional</li>
                  <li>• Decisor único (consumidor)</li>
                  <li>• Ciclo de vendas mais rápido</li>
                  <li>• Transação pontual</li>
                  <li>• Ticket médio menor</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 6: Funil de Vendas e Etapas
    <PresentationSlide key={5} background="gradient">
      <SlideTitle>Funil de Vendas e Etapas</SlideTitle>
      <SlideSubtitle>Como os leads se transformam em clientes</SlideSubtitle>
      
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(funnelStages).map(([key, stage], index) => (
            <Card key={key} className="p-6 bg-white/10 border-white/20">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{stage.name}</h3>
                <p className="text-sm text-white/80 mt-2">{stage.description}</p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-white mb-2">Ações:</h4>
                  <ul className="text-sm text-white/90 space-y-1">
                    {stage.actions.map((action, idx) => (
                      <li key={idx}>• {action}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 p-3 rounded">
                  <p className="text-xs text-white/80 font-medium">{stage.volume}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="bg-white/5 p-6 rounded-lg text-center text-white">
          <h4 className="text-xl font-bold mb-3">Sua função na Talker Flow</h4>
          <p className="text-lg opacity-90">
            Você vai trabalhar principalmente no <strong>Topo</strong> (prospecção) e <strong>Fundo</strong> (fechamento).
            Atrair leads qualificados e converter em clientes pagantes.
          </p>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 7: Visão do Produto
    <PresentationSlide key={6}>
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

    // Slide 8: Segmentos Foco - Visão Geral
    <PresentationSlide key={7}>
      <SlideTitle>Segmentos Foco - Visão Geral</SlideTitle>
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

    // Slide 9: Clínicas - Dores e Oportunidades
    <PresentationSlide key={8} background="gradient">
      <SlideTitle>Clínicas: Dores e Oportunidades</SlideTitle>
      <SlideSubtitle>Minha experiência: {segmentPains.clinicas.experience}</SlideSubtitle>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-8 bg-white/10 border-white/20">
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            😰 Principais Dores
          </h3>
          <div className="space-y-4">
            {segmentPains.clinicas.mainPains.map((pain, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">!</span>
                </div>
                <p className="text-white/90">{pain}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-8 bg-white/10 border-white/20">
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            💰 Oportunidades
          </h3>
          <div className="space-y-4">
            {segmentPains.clinicas.opportunities.map((opportunity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">$</span>
                </div>
                <p className="text-white/90">{opportunity}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
      
      <div className="mt-8 bg-white/5 p-6 rounded-lg text-center text-white">
        <h4 className="text-xl font-bold mb-3">Argumento Killer para Clínicas</h4>
        <p className="text-lg opacity-90">
          "Só o cliente que manda mensagem à noite ou no final de semana (que procuraria outra clínica) 
          e que agora você consegue atender, já paga todo o valor da plataforma no mês inteiro. O resto é brinde."
        </p>
      </div>
    </PresentationSlide>,

    // Slide 10: Imobiliárias - Dores e Oportunidades  
    <PresentationSlide key={9} background="gradient">
      <SlideTitle>Imobiliárias: Dores e Oportunidades</SlideTitle>
      <SlideSubtitle>Minha experiência: {segmentPains.imobiliarias.experience}</SlideSubtitle>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-8 bg-white/10 border-white/20">
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            😰 Principais Dores
          </h3>
          <div className="space-y-4">
            {segmentPains.imobiliarias.mainPains.map((pain, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">!</span>
                </div>
                <p className="text-white/90">{pain}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-8 bg-white/10 border-white/20">
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            💰 Oportunidades
          </h3>
          <div className="space-y-4">
            {segmentPains.imobiliarias.opportunities.map((opportunity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">$</span>
                </div>
                <p className="text-white/90">{opportunity}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
      
      <div className="mt-8 bg-white/5 p-6 rounded-lg text-center text-white">
        <h4 className="text-xl font-bold mb-3">Argumento Killer para Imobiliárias</h4>
        <p className="text-lg opacity-90">
          "Quem responde primeiro marca a visita. Com 1 aluguel (R$ 2-3k) ou 1 venda (6% de R$ 300-500k) 
          você paga o ano todo da plataforma. O corretor pode focar no 'taco' presencial."
        </p>
      </div>
    </PresentationSlide>,

    // Slide 11: Escolas - Dores e Oportunidades
    <PresentationSlide key={10} background="gradient">
      <SlideTitle>Escolas: Dores e Oportunidades</SlideTitle>
      <SlideSubtitle>Minha experiência: {segmentPains.escolas.experience}</SlideSubtitle>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-8 bg-white/10 border-white/20">
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            😰 Principais Dores
          </h3>
          <div className="space-y-4">
            {segmentPains.escolas.mainPains.map((pain, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">!</span>
                </div>
                <p className="text-white/90">{pain}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-8 bg-white/10 border-white/20">
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            💰 Oportunidades
          </h3>
          <div className="space-y-4">
            {segmentPains.escolas.opportunities.map((opportunity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">$</span>
                </div>
                <p className="text-white/90">{opportunity}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
      
      <div className="mt-8 bg-white/5 p-6 rounded-lg text-center text-white">
        <h4 className="text-xl font-bold mb-3">Argumento Killer para Escolas</h4>
        <p className="text-lg opacity-90">
          "Estamos em agosto - pico da procura por matrículas 2025. Pais pesquisam múltiplas escolas rapidamente. 
          Com 1 matrícula (R$ 2k/mês) você cobre o investimento anual da plataforma."
        </p>
      </div>
    </PresentationSlide>,

    // Slide 12: Proposta de Valor e Oferta
    <PresentationSlide key={11} background="primary">
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

    // Slide 13: Funil CRM
    <PresentationSlide key={12}>
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

    // Slide 14: Divisão Comercial da Equipe
    <PresentationSlide key={13} background="gradient">
      <SlideTitle>Divisão Comercial da Equipe</SlideTitle>
      <SlideSubtitle>Cada um focando onde tem mais experiência</SlideSubtitle>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-8 bg-white/10 border-white/20">
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            👨‍💼 Founder (Você)
          </h3>
          <div className="space-y-4 mb-6">
            {teamDivision.founder.responsibilities.map((resp, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-white/90">{resp}</p>
              </div>
            ))}
          </div>
          <div className="bg-white/5 p-4 rounded">
            <p className="text-white/80 text-sm italic">
              <strong>Rationale:</strong> {teamDivision.founder.rationale}
            </p>
          </div>
        </Card>

        <Card className="p-8 bg-white/10 border-white/20">
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            👩‍💼 Beatriz (Você)
          </h3>
          <div className="space-y-4 mb-6">
            {teamDivision.beatriz.responsibilities.map((resp, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-white/90">{resp}</p>
              </div>
            ))}
          </div>
          <div className="bg-white/5 p-4 rounded">
            <p className="text-white/80 text-sm italic">
              <strong>Rationale:</strong> {teamDivision.beatriz.rationale}
            </p>
          </div>
        </Card>
      </div>
      
      <div className="mt-8 bg-white/5 p-6 rounded-lg text-center text-white">
        <h4 className="text-xl font-bold mb-3">Estratégia Complementar</h4>
        <p className="text-lg opacity-90">
          Enquanto você constrói o pipeline individual B2B, eu abro canais de distribuidores 
          que multiplicam nossa capacidade de vendas através de parcerias estratégicas.
        </p>
      </div>
    </PresentationSlide>,

    // Slide 15: Metodologia de Prospecção - Passo a Passo
    <PresentationSlide key={14}>
      <SlideTitle>Metodologia de Prospecção - Passo a Passo</SlideTitle>
      <SlideSubtitle>Dia 1: O que fazer quando sentar na cadeira</SlideSubtitle>
      
      <div className="space-y-8">
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4 text-primary">Setup Inicial (Dia 1)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {prospectionMethodology.day1Setup.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-sm">{step}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4 text-success">Processo Diário</h3>
          <div className="space-y-3">
            {prospectionMethodology.dailyProcess.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-success text-success-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="">{step}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4 text-accent">Fontes de Leads</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {prospectionMethodology.sources.map((source, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-accent/10 rounded">
                <Search className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{source}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PresentationSlide>,

    // Slide 16: Rotina Diária
    <PresentationSlide key={15}>
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

    // Slide 17: Redes Sociais - Suas Responsabilidades
    <PresentationSlide key={16} background="gradient">
      <SlideTitle>Redes Sociais: Suas Responsabilidades</SlideTitle>
      <SlideSubtitle>Construindo autoridade e gerando leads</SlideSubtitle>
      
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-6 bg-white/10 border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <Instagram className="w-10 h-10 text-pink-400" />
              <h3 className="text-xl font-bold text-white">Stories Diários</h3>
            </div>
            <div className="space-y-3 text-white">
              <p className="font-semibold">{socialMediaPlan.expectations.stories}</p>
              <p className="text-sm opacity-90">Conteúdo espontâneo, bastidores, dicas rápidas</p>
            </div>
          </Card>

          <Card className="p-6 bg-white/10 border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-10 h-10 text-blue-400" />
              <h3 className="text-xl font-bold text-white">Posts Planejados</h3>
            </div>
            <div className="space-y-3 text-white">
              <p className="font-semibold">{socialMediaPlan.expectations.posts}</p>
              <p className="text-sm opacity-90">Conteúdo elaborado, cases, educacional</p>
            </div>
          </Card>

          <Card className="p-6 bg-white/10 border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-10 h-10 text-green-400" />
              <h3 className="text-xl font-bold text-white">Planejamento</h3>
            </div>
            <div className="space-y-3 text-white">
              <p className="font-semibold">{socialMediaPlan.expectations.calendar}</p>
              <p className="text-sm opacity-90">Organização e consistência</p>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6 bg-white/10 border-white/20">
            <h3 className="text-xl font-bold mb-4 text-white">Tipos de Conteúdo</h3>
            <div className="space-y-2">
              {socialMediaPlan.contentTypes.map((type, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-white/90 text-sm">{type}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-white/10 border-white/20">
            <h3 className="text-xl font-bold mb-4 text-white">Objetivos</h3>
            <div className="space-y-2">
              {socialMediaPlan.objectives.map((objective, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-400" />
                  <span className="text-white/90 text-sm">{objective}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 18: Métricas Norte
    <PresentationSlide key={17} background="gradient">
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

    // Slide 19: Scripts WhatsApp
    <PresentationSlide key={18}>
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

    // Slide 20: Scripts E-mail e Instagram
    <PresentationSlide key={19}>
      <SlideTitle>Scripts E-mail e Instagram</SlideTitle>
      <SlideSubtitle>Abordagem multicanal para máximo alcance</SlideSubtitle>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="text-emerald-600" />
            <h3 className="text-lg font-bold">E-mail Clínicas</h3>
          </div>
          <div className="space-y-3">
            <div>
              <strong className="text-sm text-muted-foreground">Assunto:</strong>
              <p className="text-sm font-medium">{emailScripts.clinicas.subject}</p>
            </div>
            <div>
              <strong className="text-sm text-muted-foreground">Corpo:</strong>
              <div className="bg-muted p-3 rounded text-xs whitespace-pre-line">
                {emailScripts.clinicas.body}
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="text-orange-600" />
            <h3 className="text-lg font-bold">E-mail Imobiliárias</h3>
          </div>
          <div className="space-y-3">
            <div>
              <strong className="text-sm text-muted-foreground">Assunto:</strong>
              <p className="text-sm font-medium">{emailScripts.imobiliarias.subject}</p>
            </div>
            <div>
              <strong className="text-sm text-muted-foreground">Corpo:</strong>
              <div className="bg-muted p-3 rounded text-xs whitespace-pre-line">
                {emailScripts.imobiliarias.body}
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="text-purple-600" />
            <h3 className="text-lg font-bold">E-mail Escolas</h3>
          </div>
          <div className="space-y-3">
            <div>
              <strong className="text-sm text-muted-foreground">Assunto:</strong>
              <p className="text-sm font-medium">{emailScripts.escolas.subject}</p>
            </div>
            <div>
              <strong className="text-sm text-muted-foreground">Corpo:</strong>
              <div className="bg-muted p-3 rounded text-xs whitespace-pre-line">
                {emailScripts.escolas.body}
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-8 bg-gradient-primary p-6 rounded-lg text-white">
        <h3 className="text-lg font-bold mb-4">Estratégia Multicanal</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp: Primeira abordagem</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span>E-mail: Follow-up profissional</span>
          </div>
          <div className="flex items-center gap-2">
            <Instagram className="w-5 h-5" />
            <span>DM: Abordagem casual</span>
          </div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 21: Objeções & Respostas
    <PresentationSlide key={20}>
      <SlideTitle>Objeções & Respostas</SlideTitle>
      <SlideSubtitle>Como lidar com as 5 objeções mais comuns</SlideSubtitle>
      
      <div className="space-y-6">
        {objections.map((item, index) => (
          <Card key={index} className="p-6 border-l-4 border-l-accent">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-accent mb-2">❌ Objeção #{index + 1}</h4>
                <p className="text-lg italic">"{item.objection}"</p>
              </div>
              <div>
                <h4 className="font-bold text-success mb-2">✅ Resposta</h4>
                <p className="text-lg">{item.response}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 bg-muted p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-4">Dicas para Lidar com Objeções</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>• Escute completamente antes de responder</div>
          <div>• Reconheça a preocupação como válida</div>
          <div>• Use casos reais e números quando possível</div>
          <div>• Volte sempre para o ROI e benefícios</div>
          <div>• Ofereça piloto para reduzir o risco percebido</div>
          <div>• Não argumente, eduque com empatia</div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 22: Playbook Clínicas
    <PresentationSlide key={21}>
      <SlideTitle>Playbook Clínicas</SlideTitle>
      <SlideSubtitle>Fluxo conversacional para maximizar agendamentos</SlideSubtitle>
      
      <PlaybookFlow
        title="Fluxo Conversacional - Clínicas"
          steps={[
            {
              title: "Saudação Personalizada",
              description: "Oi [Nome]! Vi que vocês atendem muito pelo WhatsApp. Posso te mostrar como aumentar seus agendamentos?",
              nextActions: ["Aguardar resposta", "Qualificar interesse"]
            },
            {
              title: "Identificar Especialidade",
              description: "Que especialidades vocês atendem? Quantos pacientes por dia vocês recebem pelo WhatsApp?",
              nextActions: ["Descobrir volume", "Entender dores"]
            },
            {
              title: "Apresentar Solução",
              description: "Imagina seus pacientes sendo atendidos em 5 segundos, 24h, até nos finais de semana? 1 paciente extra já paga tudo.",
              nextActions: ["Despertar interesse", "Mostrar ROI"]
            },
            {
              title: "Agendar Demonstração",
              description: "Que tal uma demo de 15 min hoje ou amanhã? Te mostro funcionando no seu WhatsApp real.",
              nextActions: ["Confirmar agenda", "Enviar calendário"]
            }
        ]}
        tips={[
          "Use jargões médicos quando apropriado",
          "Mencione atendimento fora do horário comercial",
          "Foque no tempo de resposta e agilidade",
          "Destaque automação de confirmações"
        ]}
      />
    </PresentationSlide>,

    // Slide 23: Playbook Imobiliárias
    <PresentationSlide key={22}>
      <SlideTitle>Playbook Imobiliárias</SlideTitle>
      <SlideSubtitle>Fluxo conversacional para agendar mais visitas</SlideSubtitle>
      
      <PlaybookFlow
        title="Fluxo Conversacional - Imobiliárias"
        steps={[
          {
            step: "Abordagem Direta",
            description: "Oi [Nome]! Quantas visitas vocês perdem por não responder rápido no WhatsApp?",
            nextActions: ["Provocar reflexão", "Identificar dor"]
          },
          {
            step: "Qualificar Operação",
            description: "Vocês trabalham mais com locação ou venda? Quantos corretores usam WhatsApp?",
            nextActions: ["Entender estrutura", "Mapear processo"]
          },
          {
            step: "Mostrar Benefício",
            description: "Quem responde primeiro marca visita. Nossa IA responde em 5s, manda ficha do imóvel e agenda com corretor disponível.",
            nextActions: ["Demonstrar valor", "Criar urgência"]
          },
          {
            step: "Fechar Demo",
            description: "1 aluguel ou venda extra paga o ano todo. Posso te mostrar funcionando hoje?",
            nextActions: ["Agendar demonstração", "Qualificar decisor"]
          }
        ]}
        tips={[
          "Foque na velocidade de resposta = mais visitas",
          "Mencione roteamento entre corretores",
          "Use exemplos de imóveis populares",
          "Destaque qualificação automática de leads"
        ]}
      />
    </PresentationSlide>,

    // Slide 24: Playbook Escolas
    <PresentationSlide key={23}>
      <SlideTitle>Playbook Escolas</SlideTitle>
      <SlideSubtitle>Fluxo conversacional para aumentar matrículas</SlideSubtitle>
      
      <PlaybookFlow
        title="Fluxo Conversacional - Escolas"
        steps={[
          {
            step: "Timing Perfeito",
            description: "Oi [Nome]! Com a captação de matrículas a todo vapor, quantos pais vocês conseguem atender por dia no WhatsApp?",
            nextActions: ["Aproveitar sazonalidade", "Descobrir volume"]
          },
          {
            step: "Identificar Segmento",
            description: "Vocês atendem que séries? Fundamental, médio ou infantil? Quantos campus?",
            nextActions: ["Mapear estrutura", "Entender complexidade"]
          },
          {
            step: "Criar Urgência",
            description: "Pais querem resposta na hora, senão vão para outra escola. Nossa IA qualifica série/turno e agenda visita 24/7.",
            nextActions: ["Mostrar necessidade", "Apresentar solução"]
          },
          {
            step: "ROI Claro",
            description: "1 matrícula nova (R$ 2k/mês) cobre o ano todo. Posso te mostrar como funciona?",
            nextActions: ["Demonstrar ROI", "Agendar apresentação"]
          }
        ]}
        tips={[
          "Use a sazonalidade agosto-novembro",
          "Foque na competição entre escolas",
          "Mencione qualificação por série/turno",
          "Destaque atendimento aos pais 24/7"
        ]}
      />
    </PresentationSlide>,

    // Slide 25: Roteiro Micro-Demo
    <PresentationSlide key={24}>
      <SlideTitle>Roteiro Micro-Demo</SlideTitle>
      <SlideSubtitle>15 minutos para conquistar o cliente</SlideSubtitle>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <Card className="p-4 text-center">
            <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
            <div className="font-bold">0-3 min</div>
            <div className="text-sm text-muted-foreground">Apresentação & Descoberta</div>
          </Card>
          <Card className="p-4 text-center">
            <Zap className="w-8 h-8 mx-auto mb-2 text-success" />
            <div className="font-bold">3-10 min</div>
            <div className="text-sm text-muted-foreground">Demo Prática</div>
          </Card>
          <Card className="p-4 text-center">
            <Target className="w-8 h-8 mx-auto mb-2 text-accent" />
            <div className="font-bold">10-13 min</div>
            <div className="text-sm text-muted-foreground">ROI & Benefícios</div>
          </Card>
          <Card className="p-4 text-center">
            <CheckCircle className="w-8 h-8 mx-auto mb-2 text-whatsapp" />
            <div className="font-bold">13-15 min</div>
            <div className="text-sm text-muted-foreground">Próximos Passos</div>
          </Card>
        </div>

        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Script Detalhado</h3>
          <div className="space-y-4 text-sm">
            <div>
              <strong className="text-primary">Abertura (0-3 min):</strong>
              <p>"Obrigado por aceitar a demo! Em 15 min vou te mostrar exatamente como o [Nome da Empresa] pode atender seus clientes em 5 segundos, 24/7. Primeiro, me conta: qual sua maior dor no WhatsApp hoje?"</p>
            </div>
            <div>
              <strong className="text-success">Demo Prática (3-10 min):</strong>
              <p>"Vou simular um cliente entrando agora no seu WhatsApp... [Mostrar conversa real, resposta da IA, agendamento, integração]. Viu como foi natural? Posso desativar a IA quando quiser."</p>
            </div>
            <div>
              <strong className="text-accent">ROI (10-13 min):</strong>
              <p>"No seu caso, com [Volume atual], isso representa [X] clientes extras por mês. Cada um vale [Ticket médio]. Em 30 dias você já teve ROI positivo."</p>
            </div>
            <div>
              <strong className="text-whatsapp">Fechamento (13-15 min):</strong>
              <p>"Faz sentido testarmos 7 dias no seu número real? Setup R$ 0. Se não reduzir seu tempo de resposta para segundos, você não continua. Podemos começar hoje?"</p>
            </div>
          </div>
        </Card>
      </div>
    </PresentationSlide>,

    // Slide 26: Proposta de 1 Página
    <PresentationSlide key={25}>
      <SlideTitle>Proposta de 1 Página</SlideTitle>
      <SlideSubtitle>Modelo para fechar na hora da demo</SlideSubtitle>
      
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 bg-gradient-card">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Proposta Talker Flow</h2>
            <p className="text-xl text-muted-foreground">Automatização WhatsApp com IA</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">O que você recebe:</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Resposta automática em ~5 segundos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Atendimento 24/7, todos os dias</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>IA treinada para seu negócio</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Integração com seus sistemas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Controle total + botão desativar</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-success">Investimento:</h3>
              <div className="space-y-4">
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="text-4xl font-bold text-primary">R$ 799</div>
                  <div className="text-lg">por mês</div>
                </div>
                <div className="text-center p-4 bg-success/10 rounded-lg">
                  <div className="text-2xl font-bold text-success">Setup R$ 0</div>
                  <div className="text-sm">Sem taxa de implantação</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-primary p-6 rounded-lg text-white text-center mb-8">
            <h4 className="text-xl font-bold mb-2">Piloto Qualificado</h4>
            <p className="text-lg">7 dias de teste no seu WhatsApp real, com acompanhamento completo</p>
          </div>

          <div className="text-center">
            <Button className="bg-whatsapp hover:bg-whatsapp/90 text-white px-8 py-4 text-lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Começar Piloto Hoje
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Se não reduzir seu tempo de resposta para segundos e não for simples para seu time, você não continua.
            </p>
          </div>
        </Card>
      </div>
    </PresentationSlide>,

    // Slide 27: Plano Semana 1
    <PresentationSlide key={26}>
      <SlideTitle>Plano Semana 1</SlideTitle>
      <SlideSubtitle>Cronograma dia a dia para começar vendendo</SlideSubtitle>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {weeklyTargets.days.map((day, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">{day.day}</h3>
              <div className="space-y-4">
                <MetricCard
                  title="Novos Leads"
                  value={day.newLeads.toString()}
                  description="Distribuídos nos 3 segmentos"
                  icon={<Users />}
                  variant="primary"
                />
                <MetricCard
                  title="Follow-ups"
                  value={day.followUps}
                  description="Contatos anteriores"
                  icon={<MessageCircle />}
                  variant="success"
                />
                <MetricCard
                  title="Demos"
                  value={day.demos}
                  description="Com prospects qualificados"
                  icon={<Target />}
                  variant="primary"
                />
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 bg-gradient-primary text-white">
          <h3 className="text-2xl font-bold mb-4 text-center">Meta Final da Semana</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">10-12</div>
              <div className="opacity-90">Demos Realizadas</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4-6</div>
              <div className="opacity-90">Pilotos Qualificados</div>
            </div>
            <div>
              <div className="text-3xl font-bold">1-3</div>
              <div className="opacity-90">Fechamentos</div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Checklist Diário</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Atualizar CRM com todos os contatos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Fazer follow-up de leads mornos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Preparar demos do dia seguinte</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Publicar 1 story nas redes sociais</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Revisar próximas ações no pipeline</span>
            </div>
          </div>
        </Card>
      </div>
    </PresentationSlide>,

    // Slide 28: Remuneração e Comissionamento
    <PresentationSlide key={27} background="gradient">
      <SlideTitle>Remuneração e Comissionamento</SlideTitle>
      <SlideSubtitle>Sua estrutura de pagamento transparente</SlideSubtitle>
      
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8 bg-white/10 border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              💰 Salário Base
            </h3>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">{compensation.base}</div>
              <p className="text-white/80 text-lg">Pagamento garantido todo mês</p>
            </div>
          </Card>

          <Card className="p-8 bg-white/10 border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              🎯 Comissão
            </h3>
            <div className="space-y-4">
              <p className="text-white text-lg font-medium">{compensation.bonus.rule}</p>
              <p className="text-white/80">{compensation.target}</p>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-white/10 border-white/20">
          <h3 className="text-2xl font-bold mb-6 text-white text-center">Exemplos Práticos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {compensation.bonus.examples.map((example, index) => (
              <div key={index} className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-2xl font-bold text-white mb-2">
                  {example.split(' ')[0]} {example.split(' ')[1]}
                </div>
                <div className="text-white/80 text-sm mb-2">
                  {example.split(' =')[0].split(' ').slice(2).join(' ')}
                </div>
                <div className="text-lg font-bold text-success">
                  {example.split(' = ')[1]}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="bg-white/5 p-6 rounded-lg text-center text-white">
          <h4 className="text-xl font-bold mb-3">Potencial de Ganhos</h4>
          <p className="text-lg opacity-90">
            Com dedicação e seguindo a metodologia, você pode facilmente chegar a 
            <strong> R$ 2.000+ por mês</strong> já no primeiro trimestre!
          </p>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 29: Próximos Passos
    <PresentationSlide key={28}>
      <SlideTitle>Próximos Passos</SlideTitle>
      <SlideSubtitle>Seu checklist para começar hoje mesmo</SlideSubtitle>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4 text-primary">Preparação Técnica</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <span>Configurar perfil LinkedIn otimizado</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <span>Instalar Apollo.io e Sales Navigator</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <span>Acessar e configurar EspoCRM</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <span>Salvar templates de scripts</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">5</div>
              <span>Preparar calendário de conteúdo 15 dias</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4 text-success">Primeiro Dia</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-success" />
              <span><strong>9h:</strong> Revisão do treinamento</span>
            </div>
            <div className="flex items-center gap-3">
              <Search className="w-6 h-6 text-success" />
              <span><strong>9h30:</strong> Primeira busca de leads</span>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-success" />
              <span><strong>10h:</strong> Primeiros contatos WhatsApp</span>
            </div>
            <div className="flex items-center gap-3">
              <UserCheck className="w-6 h-6 text-success" />
              <span><strong>14h:</strong> Reunião de alinhamento</span>
            </div>
            <div className="flex items-center gap-3">
              <Target className="w-6 h-6 text-success" />
              <span><strong>17h:</strong> Review do dia e próximas ações</span>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-gradient-primary text-white">
        <h3 className="text-xl font-bold mb-4 text-center">Suporte Contínuo</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <MessageCircle className="w-8 h-8 mx-auto mb-2" />
            <div className="font-semibold">WhatsApp Direto</div>
            <div className="text-sm opacity-90">Para dúvidas urgentes</div>
          </div>
          <div>
            <Users className="w-8 h-8 mx-auto mb-2" />
            <div className="font-semibold">Reuniões Semanais</div>
            <div className="text-sm opacity-90">Alinhamento e training</div>
          </div>
          <div>
            <Target className="w-8 h-8 mx-auto mb-2" />
            <div className="font-semibold">Acompanhamento</div>
            <div className="text-sm opacity-90">Métricas e otimização</div>
          </div>
        </div>
      </Card>
    </PresentationSlide>,

    // Slide 30: Apêndice Speed-to-Lead
    <PresentationSlide key={29} background="gradient">
      <SlideTitle>Apêndice: Speed-to-Lead</SlideTitle>
      <SlideSubtitle>Estudos que comprovam a importância da resposta rápida</SlideSubtitle>
      
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 bg-white/10 border-white/20 text-center">
            <div className="text-5xl font-bold text-white mb-4">5 min</div>
            <div className="text-white/90 mb-4">vs 30 minutos</div>
            <div className="text-3xl font-bold text-success">21x</div>
            <div className="text-white/80">mais chances de qualificar</div>
          </Card>

          <Card className="p-6 bg-white/10 border-white/20 text-center">
            <div className="text-5xl font-bold text-white mb-4">1 min</div>
            <div className="text-white/90 mb-4">vs 1 hora</div>
            <div className="text-3xl font-bold text-primary">7x</div>
            <div className="text-white/80">mais chances de conectar</div>
          </Card>

          <Card className="p-6 bg-white/10 border-white/20 text-center">
            <div className="text-5xl font-bold text-white mb-4">Imediato</div>
            <div className="text-white/90 mb-4">primeiro contato</div>
            <div className="text-3xl font-bold text-accent">80%</div>
            <div className="text-white/80">escolhem quem responde</div>
          </Card>
        </div>

        <Card className="p-8 bg-white/10 border-white/20">
          <h3 className="text-2xl font-bold mb-6 text-white">Fonte: Harvard Business Review</h3>
          <div className="space-y-4 text-white/90">
            <p>
              <strong>Estudo com 2.241 empresas B2B:</strong> Empresas que respondem leads 
              em até 5 minutos têm 21x mais chances de qualificar o prospect comparado 
              a empresas que demoram 30 minutos ou mais.
            </p>
            <p>
              <strong>InsideSales.com:</strong> 50% dos leads compram de quem responde primeiro. 
              A velocidade de resposta é o fator #1 de conversão em vendas B2B.
            </p>
            <p>
              <strong>MarketingProfs:</strong> 78% dos clientes compram da empresa que 
              responde primeiro às suas dúvidas, independente do preço.
            </p>
          </div>
        </Card>
      </div>
    </PresentationSlide>,

    // Slide 31: Apêndice Templates
    <PresentationSlide key={30}>
      <SlideTitle>Apêndice: Templates</SlideTitle>
      <SlideSubtitle>Scripts copiáveis para usar imediatamente</SlideSubtitle>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="p-4">
            <h4 className="font-bold mb-2 text-emerald-600">WhatsApp - Follow-up Clínicas</h4>
            <div className="bg-muted p-3 rounded text-xs">
              {whatsappScripts.clinicas.followup}
            </div>
          </Card>

          <Card className="p-4">
            <h4 className="font-bold mb-2 text-orange-600">WhatsApp - Follow-up Imobiliárias</h4>
            <div className="bg-muted p-3 rounded text-xs">
              {whatsappScripts.imobiliarias.followup}
            </div>
          </Card>

          <Card className="p-4">
            <h4 className="font-bold mb-2 text-purple-600">WhatsApp - Follow-up Escolas</h4>
            <div className="bg-muted p-3 rounded text-xs">
              {whatsappScripts.escolas.followup}
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-4">Respostas para Objeções Específicas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h5 className="font-semibold text-emerald-600 mb-2">Clínicas - "IA não entende medicina"</h5>
              <div className="bg-muted p-3 rounded text-xs">
                {whatsappScripts.clinicas.objection_ia}
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-orange-600 mb-2">Imobiliárias - "Prefiro atendimento manual"</h5>
              <div className="bg-muted p-3 rounded text-xs">
                {whatsappScripts.imobiliarias.objection_manual}
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-purple-600 mb-2">Escolas - "Pais não gostam de robô"</h5>
              <div className="bg-muted p-3 rounded text-xs">
                {whatsappScripts.escolas.objection_pais}
              </div>
            </div>
          </div>
        </Card>

        <WhatsAppDemo 
          messages={[
            { type: "received", content: "Oi, gostaria de agendar uma consulta", timestamp: "14:30" },
            { type: "sent", content: "Olá! Claro, posso te ajudar. Para qual especialidade você gostaria de agendar?", timestamp: "14:30" }
          ]}
          contactName="Cliente Exemplo"
          businessName="Clínica Demo"
        />
      </div>
    </PresentationSlide>
  ];

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Navegação dos slides */}
      <SlideNavigation 
        currentSlide={currentSlide}
        totalSlides={slideTitles.length}
        slideTitle={slideTitles[currentSlide]}
        onSlideChange={goToSlide}
        onNext={nextSlide}
        onPrev={prevSlide}
      />
      
      {/* Conteúdo do slide atual */}
      <div className="flex-1 overflow-hidden">
        {slides[currentSlide]}
      </div>
    </div>
  );
};
