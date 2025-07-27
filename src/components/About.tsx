import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Award, Users } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Foco no Cliente",
      description: "Priorizamos as necessidades específicas de cada cliente, oferecendo soluções personalizadas."
    },
    {
      icon: Award,
      title: "Qualidade Garantida",
      description: "Utilizamos apenas equipamentos e componentes de alta qualidade com garantia estendida."
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Nossa equipe possui certificações e anos de experiência em tecnologia empresarial."
    }
  ];

  const achievements = [
    "Mais de 500 empresas atendidas",
    "99% de satisfação dos clientes",
    "Suporte técnico 24/7 disponível",
    "Certificações em principais tecnologias",
    "Parcerias com fabricantes líderes",
    "Atendimento em todo estado"
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${aboutBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Sobre a <span className="text-primary">Dinfratech</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Especialistas em soluções de tecnologia para empresas que buscam eficiência, 
            segurança e crescimento através da inovação.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Tecnologia que impulsiona resultados
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Desde 2019, a Dinfratech tem sido a parceira de confiança de pequenas e médias empresas, 
              órgãos públicos e profissionais liberais em suas jornadas de transformação digital. 
              Oferecemos desde manutenção básica até implementação de sistemas complexos.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nossa missão é democratizar o acesso à tecnologia de qualidade, fornecendo soluções 
              que realmente fazem a diferença no dia a dia dos nossos clientes, sempre com foco 
              na eficiência operacional e segurança digital.
            </p>
            <Button variant="neon" size="lg">
              Conheça nossa história
            </Button>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-foreground mb-4">Por que escolher a Dinfratech?</h4>
            <div className="grid gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 text-center hover:shadow-card transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-neon-glow rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h5 className="text-xl font-semibold text-foreground mb-4">{value.title}</h5>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;