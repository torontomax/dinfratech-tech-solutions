import { Button } from "@/components/ui/button";
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/d687b268-6d79-406e-9063-cf4e0c9dab8a.png" 
              alt="Dinfratech Logo" 
              className="h-12 w-auto"
            />
            <p className="text-muted-foreground leading-relaxed">
              Conectando soluções, otimizando resultados. Sua parceira em tecnologia 
              para impulsionar o crescimento do seu negócio.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="border-primary/20 hover:border-primary/50">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-primary/20 hover:border-primary/50">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-primary/20 hover:border-primary/50">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-primary transition-colors">Manutenção de Computadores</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-primary transition-colors">Suporte Técnico</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-primary transition-colors">Redes e Wi-Fi</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-primary transition-colors">Segurança Digital</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-primary transition-colors">Sistemas de Atendimento</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-primary transition-colors">Monitoramento de TI</button></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary transition-colors">Sobre nós</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="text-muted-foreground hover:text-primary transition-colors">Depoimentos</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-primary transition-colors">Contato</button></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">(11) 9 9999-9999</p>
                  <p className="text-xs text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">WhatsApp</p>
                  <p className="text-xs text-muted-foreground">Atendimento 24/7</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">contato@dinfratech.com.br</p>
                  <p className="text-xs text-muted-foreground">Resposta em até 2h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">Grande São Paulo</p>
                  <p className="text-xs text-muted-foreground">Atendemos seu bairro e região</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Dinfratech. Todos os direitos reservados.
          </p>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={scrollToTop}
            className="mt-4 md:mt-0"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Voltar ao topo
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;