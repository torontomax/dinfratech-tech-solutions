import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  FileText,
  Headphones
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Entre em <span className="text-primary">contato</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar sua infraestrutura de TI? Nossa equipe está 
            disponível para oferecer a solução ideal para seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-neon-glow rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">Telefone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Fale diretamente com nossa equipe de especialistas
                </p>
                <Button variant="outline" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  (11) 9 9999-9999
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-neon-glow rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Atendimento rápido e direto pelo WhatsApp
                </p>
                <Button variant="neon" className="w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Iniciar conversa
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-neon-glow rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">E-mail</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Envie sua mensagem detalhada
                </p>
                <Button variant="outline" className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  contato@dinfratech.com.br
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-primary" />
                  Solicite um orçamento personalizado
                </CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e nossa equipe entrará em contato em até 2 horas úteis.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome completo *
                    </label>
                    <Input placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      E-mail *
                    </label>
                    <Input type="email" placeholder="seu@email.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Telefone/WhatsApp *
                    </label>
                    <Input placeholder="(11) 9 9999-9999" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Empresa
                    </label>
                    <Input placeholder="Nome da sua empresa" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Serviço de interesse
                  </label>
                  <select className="w-full p-3 rounded-lg bg-input border border-border text-foreground">
                    <option>Selecione um serviço</option>
                    <option>Manutenção de Computadores</option>
                    <option>Suporte Técnico</option>
                    <option>Redes e Conectividade</option>
                    <option>Segurança Digital</option>
                    <option>Sistemas de Atendimento</option>
                    <option>Monitoramento de TI</option>
                    <option>Pontos de Venda</option>
                    <option>Treinamentos</option>
                    <option>Venda de Equipamentos</option>
                    <option>Consultoria em TI</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Descreva suas necessidades *
                  </label>
                  <Textarea 
                    placeholder="Conte-nos sobre seu projeto, problemas atuais ou objetivos que deseja alcançar..."
                    rows={4}
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar solicitação de orçamento
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar este formulário, você concorda com nossa política de privacidade. 
                  Responderemos em até 2 horas úteis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card/30 backdrop-blur-sm border-border/50 text-center">
            <CardContent className="p-6">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Localização</h4>
              <p className="text-sm text-muted-foreground">
                Atendemos todo o estado de São Paulo
                <br />
                Sede: Grande São Paulo
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/30 backdrop-blur-sm border-border/50 text-center">
            <CardContent className="p-6">
              <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Horário de Atendimento</h4>
              <p className="text-sm text-muted-foreground">
                Segunda a Sexta: 8h às 18h
                <br />
                Sábado: 8h às 12h
                <br />
                Emergências: 24/7
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/30 backdrop-blur-sm border-border/50 text-center">
            <CardContent className="p-6">
              <Headphones className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Suporte 24/7</h4>
              <p className="text-sm text-muted-foreground">
                Suporte técnico disponível
                <br />
                24 horas por dia,
                <br />
                7 dias por semana
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;