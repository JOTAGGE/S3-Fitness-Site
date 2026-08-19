import { useState, useEffect } from "react";
import { X, Clock, ShoppingBag, ExternalLink, Sparkles, MessageCircle, AlertTriangle } from "lucide-react";

export function DemoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup shortly after initial load
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem("s3_demo_popup_dismissed");
      if (!dismissed) {
        setIsOpen(true);
      }
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("s3_demo_popup_dismissed", "true");
  };

  const handleReopen = () => {
    setIsOpen(true);
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Floating Demo Badge (Allows reopening anytime if dismissed) */}
      {!isOpen && (
        <button
          onClick={handleReopen}
          className="demo-floating-trigger"
          aria-label="Abrir informações da versão Demo"
          title="Site Demo • Clique para informações"
        >
          <span className="demo-trigger-dot" />
          <span className="demo-trigger-text">SITE DEMO (EXPIRA EM BREVE)</span>
          <ExternalLink size={13} />
        </button>
      )}

      {/* Modal Overlay & Card */}
      {isOpen && (
        <div className="demo-popup-overlay" onClick={handleClose} role="dialog" aria-modal="true">
          <div
            className="demo-popup-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="demo-popup-close-btn"
              aria-label="Fechar aviso"
            >
              <X size={20} />
            </button>

            {/* Header Badge */}
            <div className="demo-popup-badge-wrapper">
              <span className="demo-popup-badge">
                <span className="demo-pulse-dot" />
                VERSÃO DEMO • ACESSO TEMPORÁRIO
              </span>
            </div>

            {/* Title */}
            <h2 className="demo-popup-title">
              ESTE É UM <span className="text-yellow">SITE DEMO</span>
            </h2>

            {/* Subtitle / Notice */}
            <p className="demo-popup-warning">
              <AlertTriangle size={17} className="demo-warning-icon" />
              <span>
                <strong>Atenção:</strong> No dia seguinte você <strong>não terá mais acesso</strong> a este link de demonstração.
              </span>
            </p>

            <p className="demo-popup-description">
              Aproveite para dar uma boa olhada em toda a estrutura, seções, modalidades e design.
              Caso queira adquirir este site pronto ou encomendar um projeto exclusivo para o seu negócio,
              entre em contato pelos canais oficiais:
            </p>

            {/* Info highlight */}
            <div className="demo-popup-catalog-info">
              <div className="demo-catalog-icon-box">
                <ShoppingBag size={20} />
              </div>
              <div className="demo-catalog-text">
                <strong>Catálogo Direto no WhatsApp:</strong>
                <span>Você pode visualizar e escolher diretamente o serviço ou produto no catálogo oficial da NOMA.</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="demo-popup-actions">
              <a
                href="https://wa.me/c/558183100118"
                target="_blank"
                rel="noopener noreferrer"
                className="button demo-btn-whatsapp"
              >
                <MessageCircle size={18} />
                <span>WHATSAPP (CATÁLOGO)</span>
                <span className="demo-btn-arrow">↗</span>
              </a>

              <a
                href="http://nomaproject.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="button demo-btn-noma"
              >
                <Sparkles size={16} />
                <span>NOMA PROJECTS</span>
                <span className="demo-btn-arrow">↗</span>
              </a>
            </div>

            {/* Footer Dismiss action */}
            <div className="demo-popup-footer">
              <button onClick={handleClose} className="demo-dismiss-link">
                Continuar explorando a demo →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
