import { useEffect, useState } from 'react';
import {
  CONTACTS_COMERCIAL,
  CONTACTS_DIRECAO,
  CTAS,
  HERO_IMAGES,
  INSPIRACOES,
  LINKS,
  SHOWROOM,
} from './data/site.js';

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </svg>
);

const PlusIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrent((index) => (index + 1) % HERO_IMAGES.length);
    }, 6500);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="slides">
        {HERO_IMAGES.map((src, index) => (
          <div
            className={`slide ${index === current ? 'active' : ''}`}
            key={src}
          >
            <div className="bg" style={{ backgroundImage: `url('${src}')` }} />
          </div>
        ))}
      </div>
      <div className="hero-grain" />

      <header className="topbar">
        <div className="right">Atendimento</div>
      </header>

      <div className="hero-inner">
        <h1 className="hero-title fade-up d-2">
          Iluminação
          <br />&amp; <em>Acabamentos</em>
        </h1>

        <p className="hero-sub fade-up d-3">
          Iluminação, acabamentos e soluções para transformar seu ambiente.
        </p>
        <p className="hero-tagline fade-up d-4">
          Um espaço pensado para revelar o melhor de cada ambiente.
        </p>
      </div>

      <div className="cue fade-up d-5">
        <span className="ln" />
        <span>Role para ver</span>
      </div>
      <div className="pager fade-up d-5" aria-label="Carrossel de imagens">
        {HERO_IMAGES.map((_, index) => (
          <button
            aria-current={index === current ? 'true' : undefined}
            aria-label={`Imagem ${index + 1}`}
            key={index}
            onClick={() => setCurrent(index)}
            type="button"
          >
            <span className="bar" />
          </button>
        ))}
      </div>
    </section>
  );
}

function LinkButton({ external, href, kind, label, meta }) {
  const className = ['btn', kind].filter(Boolean).join(' ');

  return (
    <a
      className={className}
      href={href}
      rel={external ? 'noopener noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      <span className="label">
        <span className="title-line">{label}</span>
        <span className="meta">{meta}</span>
      </span>
      <span className="arrow" aria-hidden="true">
        <ArrowIcon />
      </span>
    </a>
  );
}

function CtasSection() {
  return (
    <section className="section reveal" data-screen-label="02 CTAs">
      <div className="section-inner narrow">
        <div className="section-head">
          <span className="kicker">
            <span className="ln" />
            Atendimento &middot; Loja &middot; Inspirações
            <span className="ln" />
          </span>
          <h2>
            Por onde quer <em>começar</em>?
          </h2>
        </div>

        <div className="ctas stagger">
          {CTAS.map((cta) => (
            <LinkButton key={cta.label} {...cta} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCard({ contact, lead = false }) {
  return (
    <a
      aria-label={`WhatsApp ${contact.name}`}
      className={`contact ${lead ? 'lead' : ''}`}
      href={contact.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div>
        <div className="name">{contact.name}</div>
        <div className="role">{contact.role}</div>
      </div>
      <span className="wa-btn">
        <span>Chamar no WhatsApp</span>
        <span className="arr" aria-hidden="true">
          <ArrowIcon />
        </span>
      </span>
    </a>
  );
}

function AtendimentoSection() {
  return (
    <section id="atendimento" className="section reveal" data-screen-label="03 Atendimento">
      <div className="section-inner">
        <div className="section-head">
          <h2>
            Fale com <em>nosso</em> time
          </h2>
          <p>Escolha o atendimento ideal para o que você precisa.</p>
        </div>

        <div className="contact-group">
          <div className="group-head">
            <h3>Atendimento comercial</h3>
          </div>
          <div className="contacts-grid grid-3 stagger">
            {CONTACTS_COMERCIAL.map((contact) => (
              <ContactCard contact={contact} key={contact.name} />
            ))}
          </div>
        </div>

        <div className="contact-group">
          <div className="group-head">
            <h3>Direção da loja</h3>
          </div>
          <div className="contacts-grid grid-2 stagger">
            {CONTACTS_DIRECAO.map((contact) => (
              <ContactCard contact={contact} key={contact.name} lead />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ShowroomSection() {
  return (
    <section id="showroom" className="section reveal" data-screen-label="04 Showroom">
      <div className="section-inner">
        <div className="section-head">
          <span className="kicker">
            <span className="ln" />
            Fotos da loja &middot; Campina Grande
            <span className="ln" />
          </span>
          <h2>
            Conheça nosso <em>showroom</em>
          </h2>
          <p>
            Um espaço pensado para inspirar projetos, escolhas e novas possibilidades
            para o seu ambiente.
          </p>
        </div>

        <div className="showroom-grid stagger">
          {SHOWROOM.map((src) => (
            <div className="showroom-tile" key={src}>
              <div className="img" style={{ backgroundImage: `url('${src}')` }} />
            </div>
          ))}
        </div>

        <div className="mini-cta-wrap">
          <a
            className="mini-cta"
            href={LINKS.visita}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="dot" />
            <span>Quero visitar a loja</span>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function InspiracoesSection() {
  return (
    <section id="inspiracoes" className="section reveal" data-screen-label="05 Inspiracoes">
      <div className="section-inner">
        <div className="section-head">
          <span className="kicker">
            <span className="ln" />
            Projetos &middot; Ideias &middot; Referências
            <span className="ln" />
          </span>
          <h2>
            Inspirações para <em>ambientes</em>
          </h2>
          <p>
            Referências para transformar ideias em ambientes iluminados com
            personalidade.
          </p>
        </div>

        <div className="insp-grid stagger">
          {INSPIRACOES.map((card, index) => (
            <a
              className="insp-card"
              href={LINKS.ajuda}
              key={card.titulo}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="img" style={{ backgroundImage: `url('${card.img}')` }} />
              <div className="body">
                <div>
                  <div className="num">{String(index + 1).padStart(2, '0')} —</div>
                  <h3>{card.titulo}</h3>
                  <div className="sub">{card.sub}</div>
                </div>
                <div className="plus" aria-hidden="true">
                  <PlusIcon />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mini-cta-wrap">
          <a
            className="mini-cta"
            href={LINKS.ajuda}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="dot" />
            <span>Quero ajuda no meu ambiente</span>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer data-screen-label="06 Footer">
      <div className="footer-inner">
        <div>
          <div className="foot-brand">
            <em>Iluminação</em> &amp; Acabamentos
          </div>
          <div className="foot-line">
            Campina Grande &middot; Paraíba &middot; Brasil
          </div>
        </div>
        <div className="foot-meta">
          <a href={LINKS.geral} rel="noopener noreferrer" target="_blank">
            Atendimento via WhatsApp
          </a>
          <a href={LINKS.localizacao} rel="noopener noreferrer" target="_blank">
            Localização &middot; Google Maps
          </a>
          <span>Seg a Sáb &middot; 09h-18h</span>
        </div>
      </div>
      <div className="foot-rule">
        <span>© Iluminação &amp; Acabamentos</span>
        <span>Campina Grande / PB</span>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in');
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll('.reveal, .stagger').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!window.location.hash) return;

    window.requestAnimationFrame(() => {
      const target = document.querySelector(window.location.hash);
      target?.classList.add('in');
      target?.querySelectorAll('.stagger').forEach((element) => {
        element.classList.add('in');
      });
      target?.scrollIntoView();
    });
  }, []);

  return (
    <div className="page">
      <Hero />
      <CtasSection />
      <AtendimentoSection />
      <ShowroomSection />
      <InspiracoesSection />
      <Footer />
    </div>
  );
}
