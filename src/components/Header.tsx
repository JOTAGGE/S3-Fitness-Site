import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { site } from "../data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const items = [
    ["#estrutura", "Estrutura"],
    ["#modalidades", "Modalidades"],
    ["#horarios", "Horários"],
    ["#contato", "Contato"],
  ];

  return (
    <header className="header">
      <div className="container header-inner">
        <Logo />
        <nav className={open ? "nav open" : "nav"}>
          {items.map(([href, label]) => (
            <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href={`tel:${site.phone.replace(/\D/g, "")}`}>
            FALE COM A S3 <ArrowUpRight size={16} />
          </a>
        </nav>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}