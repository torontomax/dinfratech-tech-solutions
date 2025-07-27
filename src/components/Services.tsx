import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Computer, 
  Wifi, 
  Shield, 
  Users, 
  MonitorSpeaker, 
  BarChart3, 
  ShoppingCart, 
  GraduationCap,
  HardDrive
} from "lucide-react";
import servicesImage from "@/assets/services-tech.jpg";

const Services = () => {
  const services = [
    {
      icon: Computer,
      title: "Manutenção de Computadores",
      description: "Manutenção preventiva e corretiva de computadores e notebooks com diagnóstico completo.",
      features: ["Diagnóstico gratuito", "Reparo em até 48h", "Garantia de 6 meses"]
    },
    {
      icon: Users,
      title: "Suporte Técnico",
      description: "Suporte técnico remoto e presencial para resolver seus problemas de TI rapidamente.",
      features: ["Atendimento 24/7", "Suporte remoto", "Visita presencial"]
    },
    {
      icon: Wifi,
      title: "Redes e Conectividade",
      description: "Instalação e manutenção de redes cabeadas e Wi-Fi para empresas de todos os portes.",
      features: ["Projeto de rede", "Instalação completa", "Manutenção periódica"]
    },
    {
      icon: Shield,
      title: "Segurança Digital",
      description: "Soluções em segurança digital com proteção contra ameaças e gestão de backups.",
      features: ["Antivírus empresarial", "Backup automático", "Proteção 24/7"]
    },
    {
      icon: MonitorSpeaker,
      title: "Sistemas de Atendimento",
      description: "Implantação e gerenciamento de sistemas de atendimento ao cliente eficientes.",
      features: ["CRM integrado", "Chat online", "Relatórios detalhados"]
    },
    {
      icon: BarChart3,
      title: "Monitoramento de TI",
      description: "Monitoramento de infraestrutura de TI e automação de processos empresariais.",
      features: ["Monitoramento 24/7", "Alertas automáticos", "Relatórios em tempo real"]
    },
    {
      icon: ShoppingCart,
      title: "Pontos de Venda",
      description: "Implantação de pontos de venda modernos para pequenos comércios.",
      features: ["PDV completo", "Integração fiscal", "Treinamento incluído"]
    },
    {
      icon: GraduationCap,
      title: "Treinamentos",
      description: "Treinamentos e orientações em uso de tecnologias para equipes e empresas.",
      features: ["Cursos personalizados", "Material didático", "Certificado"]
    },
    {
      icon: HardDrive,
      title: "Venda de Equipamentos",
      description: "Venda e instalação de periféricos e componentes de informática de qualidade.",
      features: ["Produtos originais", "Garantia estendida", "Instalação gratuita"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em tecnologia para pequenas e médias empresas, 
            órgãos públicos e profissionais liberais.
          </p>
        </div>

        {/* Featured Service */}
        <div className="mb-16">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Soluções Completas em TI
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Da manutenção preventiva à implementação de sistemas complexos, 
                  oferecemos tudo que sua empresa precisa para manter a tecnologia 
                  funcionando perfeitamente.
                </p>
                <Button variant="neon" size="lg" className="self-start">
                  Saiba mais sobre nossos serviços
                </Button>
              </div>
              <div 
                className="min-h-[300px] bg-cover bg-center"
                style={{ backgroundImage: `url(${servicesImage})` }}
              />
            </div>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-neon-glow rounded-lg flex items-center justify-center mb-4 group-hover:shadow-neon transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary/20 hover:border-primary/50">
            Ver todos os serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;