import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <div className="space-y-1">
              <h3 className="font-semibold text-foreground">Cookies e Privacidade</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Utilizamos cookies essenciais para melhorar sua experiência em nosso site. 
                Ao continuar navegando, você concorda com nossa{' '}
                <a href="#" className="text-primary hover:underline">
                  Política de Privacidade
                </a>{' '}
                e o uso de cookies conforme a LGPD.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDecline}
              className="text-muted-foreground hover:text-foreground"
            >
              Recusar
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              className="bg-gradient-to-r from-primary to-neon-glow hover:from-primary/90 hover:to-neon-glow/90"
            >
              Aceitar Cookies
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDecline}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}