import { useState } from "react";
import { ArrowDown, ArrowUpRight, Check, Clock3, Dumbbell, Flame, Sparkles, Swords, Users, Zap } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SectionTitle } from "../components/SectionTitle";
import { WhatsApp } from "../components/WhatsApp";
import { classes, features, modalities, site, testimonials } from "../data/site";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Todas as Modalidades" },
    { id: "strength", label: "Musculação & Força" },
    { id: "cardio", label: "Treino Funcional" },
    { id: "group", label: "Aulas Coletivas & Ritmos" },
    { id: "fight", label: "Artes Marciais" },
  ];

  const filteredModalities = activeCategory === "all"
    ? modalities
    : modalities.filter((m) => m.category === activeCategory);

  return (
    <div>
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-bg" />
          <div className="container hero-content">
            <div className="hero-kicker">
              <span className="status-dot" />
              <span>ACADEMIA <strong>•</strong> VÁRZEA <strong>•</strong> RECIFE / PE</span>
            </div>
            <h1>
              SEU TREINO.<br />
              <span className="text-yellow">SEU RITMO.</span>
            </h1>
            <p className="hero-text">
              Espaço completo para quem quer evoluir com constância. Musculação,
              funcional, lutas e aulas coletivas com professores próximos e a energia da comunidade S3.
            </p>
            <div className="hero-actions">
              <a href="#modalidades" className="button button-primary">
                CONHEÇA AS MODALIDADES <ArrowUpRight size={19} />
              </a>
              <a href="#horarios" className="button button-ghost">
                VER HORÁRIOS <ArrowDown size={18} />
              </a>
            </div>
          </div>
          <div className="hero-bottom container">
            <span>SCROLL PARA EXPLORAR</span>
            <span>01 / 06</span>
          </div>
        </section>

        {/* TICKER */}
        <section className="ticker">
          <div className="ticker-track">
            <span>FORÇA</span><b>✦</b>
            <span>DISCIPLINA</span><b>✦</b>
            <span>ENERGIA</span><b>✦</b>
            <span>COMUNIDADE S3</span><b>✦</b>
            <span>RESULTADO REAL</span><b>✦</b>
            <span>FORÇA</span><b>✦</b>
            <span>DISCIPLINA</span><b>✦</b>
            <span>ENERGIA</span><b>✦</b>
            <span>COMUNIDADE S3</span><b>✦</b>
            <span>RESULTADO REAL</span><b>✦</b>
          </div>
        </section>

        {/* INTRO S3 */}
        <section className="intro section-pad">
          <div className="container intro-grid">
            <div className="intro-big">
              <span className="eyebrow eyebrow-orange">01 — A S3 FITNESS</span>
              <h2>MENOS DESCULPA.<br /><em>MAIS TREINO.</em></h2>
            </div>
            <div className="intro-copy">
              <p className="lead">Na S3 Fitness, academia não é complicação. É energia e consistência.</p>
              <p>
                Você chega, treina do seu jeito com apoio de professores qualificados,
                evolui e faz parte de uma comunidade que puxa você pra cima.
              </p>
              <a href="#modalidades" className="text-link">
                EXPLORAR MODALIDADES <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ESTRUTURA */}
        <section id="estrutura" className="features section-pad section-dark">
          <div className="container">
            <SectionTitle
              eyebrow="02 — ESTRUTURA & PILARES"
              title="TUDO O QUE VOCÊ PRECISA PRA EVOLUIR."
              description="Ambiente equipado, professores presentes e modalidades para todos os objetivos."
            />
            <div className="feature-grid">
              {features.map((feature) => (
                <article className="feature-card" key={feature.number}>
                  <span className="feature-number">{feature.number}</span>
                  <div className="feature-icon">
                    {feature.number === "01" ? <Dumbbell /> :
                     feature.number === "02" ? <Zap /> :
                     feature.number === "03" ? <Users /> :
                     <Swords />}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                  <ArrowUpRight className="feature-arrow" size={22} />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MODALIDADES (REFORMULADA E CLARA) */}
        <section id="modalidades" className="modalities-section section-pad">
          <div className="container">
            <SectionTitle
              eyebrow="03 — MODALIDADES S3"
              title="ESCOLHA O SEU TIPO DE TREINO."
              description="Entenda o que cada modalidade oferece e encontre o formato ideal para a sua rotina e objetivos."
            />

            {/* Category Filter Tabs */}
            <div className="modalities-filter" role="tablist">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`modality-tab ${activeCategory === cat.id ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Cards Grid */}
            <div className="modalities-grid">
              {filteredModalities.map((item) => {
                const whatsappMsg = encodeURIComponent(`Olá, equipe S3! Gostaria de saber mais sobre a modalidade de ${item.name} e como funciona.`);
                return (
                  <article className="modality-card" key={item.id}>
                    <div className="modality-media">
                      <img src={item.image} alt={item.name} loading="lazy" />
                      <span className="modality-badge">{item.badge}</span>
                      <div className="modality-tags-floating">
                        <span className={`modality-tag-pill ${item.intensity === "Alta" ? "intensity-high" : "intensity-adaptable"}`}>
                          <Flame size={12} /> Intensidade: {item.intensity}
                        </span>
                        <span className="modality-tag-pill">
                          <Clock3 size={12} /> {item.duration}
                        </span>
                      </div>
                    </div>

                    <div className="modality-body">
                      <div className="modality-header">
                        <h3 className="modality-title">{item.name}</h3>
                        <div className="modality-subtitle">{item.subtitle}</div>
                      </div>

                      <p className="modality-desc">{item.description}</p>

                      <div className="modality-target-box">
                        <strong>Para quem é indicado:</strong>
                        {item.target}
                      </div>

                      <ul className="modality-benefits-list">
                        {item.benefits.map((benefit, idx) => (
                          <li key={idx}>
                            <span className="modality-check-icon">
                              <Check size={12} strokeWidth={3} />
                            </span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="modality-footer">
                        <a
                          href={`https://wa.me/${site.whatsappNumber}?text=${whatsappMsg}`}
                          target="_blank"
                          rel="noreferrer"
                          className="modality-btn-action"
                        >
                          EXPERIMENTAR NO WHATSAPP <ArrowUpRight size={15} />
                        </a>
                        <span className="modality-meta-info">{item.categoryLabel}</span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* HORÁRIOS */}
        <section id="horarios" className="schedule section-pad section-light">
          <div className="container">
            <SectionTitle
              eyebrow="04 — GRADE & HORÁRIOS"
              title="ESCOLHE A HORA. FAZ ACONTECER."
              description="Grade flexível do início da manhã até a noite para você não perder o treino."
            />
            <div className="schedule-layout">
              <div className="hours-card">
                <Clock3 size={28} />
                <span className="eyebrow">FUNCIONAMENTO ACADEMIA</span>
                <div className="hours-row">
                  <span>SEG — SEX</span>
                  <strong>{site.hours.weekdays}</strong>
                </div>
                <div className="hours-row">
                  <span>SÁBADO</span>
                  <strong>{site.hours.saturday}</strong>
                </div>
                <div className="hours-row">
                  <span>DOMINGO</span>
                  <strong>{site.hours.sunday}</strong>
                </div>
              </div>

              <div className="classes">
                <div className="classes-head">
                  <span>DIA</span>
                  <span>AULA / MODALIDADE</span>
                  <span>FOCO</span>
                  <span>HORÁRIO</span>
                </div>
                {classes.map((item, i) => (
                  <div className="class-row" key={`${item.day}-${item.time}-${i}`}>
                    <span className="class-day">{item.day}</span>
                    <strong>{item.name}</strong>
                    <span className="class-tag">{item.tag}</span>
                    <time>{item.time}</time>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="quote-section section-pad section-dark">
          <div className="container">
            <span className="eyebrow">05 — QUEM TREINA, SABE</span>
            <div className="quote-mark">“</div>
            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <blockquote key={item.quote}>
                  <p>{item.quote}</p>
                  <footer>{item.name} <span>— {item.role}</span></footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="cta-section">
          <div className="cta-bg" />
          <div className="container cta-content">
            <span className="eyebrow eyebrow-orange">06 — PARTIU TREINAR?</span>
            <h2>
              COMEÇA<br />
              <span className="text-yellow">AGORA.</span>
            </h2>
            <p>
              Não espere a próxima segunda-feira. Venha conhecer o espaço S3 na Várzea
              ou fale com a gente pelo WhatsApp.
            </p>
            <div className="hero-actions">
              <a
                href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent("Olá, S3! Quero agendar uma visita e conhecer a academia.")}`}
                target="_blank"
                rel="noreferrer"
                className="button button-primary"
              >
                FALAR NO WHATSAPP <ArrowUpRight size={19} />
              </a>
              <a href={site.maps} target="_blank" rel="noreferrer" className="button button-light">
                COMO CHEGAR NA S3 <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsApp />
    </div>
  );
}