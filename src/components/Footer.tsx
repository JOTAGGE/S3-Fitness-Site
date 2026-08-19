import { Instagram, Facebook, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { site } from "../data/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="container">
        <div className="footer-top">
          <div>
            <Logo />
            <p className="footer-copy">Treino sério. Ambiente leve.<br />Resultado construído no dia a dia.</p>
          </div>
          <div className="footer-action">
            <span className="eyebrow">BORA TREINAR?</span>
            <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="footer-phone">{site.phone}</a>
          </div>
        </div>
        <div className="footer-grid">
          <div>
            <span className="eyebrow">ENDEREÇO</span>
            <a className="footer-link" href={site.maps} target="_blank" rel="noreferrer">
              <MapPin size={18} /> R. João Francisco Lisboa, 170<br />Várzea — Recife / PE
            </a>
          </div>
          <div>
            <span className="eyebrow">HORÁRIOS</span>
            <p>SEG — SEX <strong>{site.hours.weekdays}</strong></p>
            <p>SÁBADO <strong>{site.hours.saturday}</strong></p>
            <p>DOMINGO <strong>{site.hours.sunday}</strong></p>
          </div>
          <div>
            <span className="eyebrow">SOCIAL</span>
            <div className="socials">
              <a href={site.instagram} target="_blank" rel="noreferrer"><Instagram size={18} /> Instagram <ArrowUpRight size={15} /></a>
              <a href={site.facebook} target="_blank" rel="noreferrer"><Facebook size={18} /> Facebook <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} S3 FITNESS</span>
          <span>RECIFE / PE</span>
        </div>
      </div>
    </footer>
  );
}