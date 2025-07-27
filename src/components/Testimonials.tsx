import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      company: "Loja da Maria - Comércio Varejista",
      role: "Proprietária",
      content: "A Dinfratech transformou completamente nossa gestão. O sistema de PDV que eles instalaram triplicou nossa eficiência no atendimento e o suporte técnico é excepcional.",
      rating: 5,
      results: "300% mais eficiência"
    },
    {
      name: "João Santos",
      company: "Prefeitura Municipal",
      role: "Secretário de Administração",
      content: "Parceria fundamental para modernização da nossa infraestrutura de TI. Conseguimos digitalizar todos os processos e melhorar significativamente o atendimento ao cidadão.",
      rating: 5,
      results: "100% dos processos digitalizados"
    },
    {
      name: "Ana Rodrigues",
      company: "Consultório Médico",
      role: "Médica",
      content: "O sistema de backup implementado pela Dinfratech salvou meu consultório quando tivemos um problema no servidor. A segurança dos dados dos pacientes está garantida.",
      rating: 5,
      results: "Zero perda de dados"
    },
    {
      name: "Carlos Mendes",
      company: "Escritório de Advocacia",
      role: "Advogado",
      content: "Suporte técnico impecável e soluções que realmente funcionam. Nossa produtividade aumentou muito após a implementação da rede e sistemas de segurança.",
      rating: 5,
      results: "50% mais produtividade"
    },
    {
      name: "Fernanda Costa",
      company: "Escola Particular",
      role: "Diretora",
      content: "Desde a implementação da rede Wi-Fi e sistemas de gestão escolar, conseguimos oferecer um ensino mais moderno e conectado. Os pais adoraram a transparência.",
      rating: 5,
      results: "95% satisfação dos pais"
    },
    {
      name: "Ricardo Lima",
      company: "Pequena Indústria",
      role: "Gerente de Produção",
      content: "O monitoramento 24/7 da nossa infraestrutura de TI reduziu drasticamente os problemas técnicos. Agora nossa produção não para mais por falhas de sistema.",
      rating: 5,
      results: "90% menos downtime"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            O que nossos <span className="text-primary">clientes</span> dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Resultados reais de empresas que confiaram na Dinfratech para transformar 
            sua infraestrutura de tecnologia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-primary/60" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="border-t border-border/50 pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-primary">{testimonial.role}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-primary">{testimonial.results}</div>
                      <div className="text-xs text-muted-foreground">Resultado</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Avaliação média</div>
            </div>
            <div className="w-px h-12 bg-border/50" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Clientes satisfeitos</div>
            </div>
            <div className="w-px h-12 bg-border/50" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">99%</div>
              <div className="text-sm text-muted-foreground">Taxa de sucesso</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;