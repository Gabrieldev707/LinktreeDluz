const PLACEHOLDERS = {
  WHATSAPP_CONSULTOR_01: 'https://wa.me/5583993718424',
  WHATSAPP_CONSULTOR_02: 'https://wa.me/5583974004993',
  WHATSAPP_CONSULTOR_03: 'https://wa.me/5583999428275',
  WHATSAPP_DONA: 'https://wa.me/5583993667767',
  WHATSAPP_DONO: 'https://wa.me/5583993783504',
  WHATSAPP_ARQUITETOS: 'https://wa.me/55XXXXXXXXXXX',
  WHATSAPP_VISITA: 'https://wa.me/55XXXXXXXXXXX',
  WHATSAPP_AJUDA: 'https://wa.me/55XXXXXXXXXXX',
  WHATSAPP_GERAL: 'https://wa.me/55XXXXXXXXXXX',
  LOCALIZACAO_LINK:
    'https://www.google.com/maps/search/?api=1&query=R.%20Paulo%20de%20Frontin%2C%20160%20-%20Centro%2C%20Campina%20Grande%20-%20PB%2C%2058400-310',
};

const MSG = {
  consultor:
    'Olá! Vim pelo Instagram da DLUZ e gostaria de atendimento para iluminação e acabamentos.',
  dona:
    'Olá! Vim pelo Instagram da DLUZ e gostaria de falar com a direção sobre atendimento/projeto.',
  dono:
    'Olá! Vim pelo Instagram da DLUZ e gostaria de falar sobre atendimento, orçamento ou visita à loja.',
  arquitetos:
    'Olá! Sou arquiteto(a) e gostaria de saber mais sobre o atendimento profissional da DLUZ.',
  visita:
    'Olá! Gostaria de saber o horário de funcionamento e visitar o showroom da DLUZ.',
  ajuda:
    'Olá! Vi as inspirações da DLUZ e gostaria de ajuda para escolher iluminação para meu ambiente.',
};

export const wa = (base, text) =>
  `${base}${base.includes('?') ? '&' : '?'}text=${encodeURIComponent(text)}`;

export const LINKS = {
  arquitetos: wa(PLACEHOLDERS.WHATSAPP_ARQUITETOS, MSG.arquitetos),
  ajuda: wa(PLACEHOLDERS.WHATSAPP_AJUDA, MSG.ajuda),
  geral: wa(PLACEHOLDERS.WHATSAPP_GERAL, MSG.consultor),
  localizacao: PLACEHOLDERS.LOCALIZACAO_LINK,
  visita: wa(PLACEHOLDERS.WHATSAPP_VISITA, MSG.visita),
};

export const HERO_IMAGES = [
  'images/02-pendentes-vidro.jpg',
  'images/09-pendentes-organicos.jpg',
  'images/04-pendentes-canelados.jpg',
  'images/07-pendentes-papel.jpg',
  'images/03-pendentes-disco.jpg',
  'images/10-pendentes-cilindricos.jpg',
];

export const CTAS = [
  {
    kind: 'primary',
    label: 'Fale com nossa equipe',
    meta: 'Escolha seu atendimento',
    href: '#atendimento',
  },
  {
    kind: 'warm',
    label: 'Conheça nosso showroom',
    meta: 'Fotos da loja • Campina Grande',
    href: '#showroom',
  },
  {
    label: 'Inspirações para ambientes',
    meta: 'Projetos • Ideias • Referências',
    href: '#inspiracoes',
  },
  {
    label: 'Ver localização da loja',
    meta: 'Google Maps',
    href: PLACEHOLDERS.LOCALIZACAO_LINK,
    external: true,
  },
];

export const CONTACTS_COMERCIAL = [
  {
    name: 'Consultora Estefhany',
    role: 'Atendimento comercial',
    href: wa(PLACEHOLDERS.WHATSAPP_CONSULTOR_01, MSG.consultor),
  },
  {
    name: 'Consultor Hallyf',
    role: 'Iluminação e acabamentos',
    href: wa(PLACEHOLDERS.WHATSAPP_CONSULTOR_02, MSG.consultor),
  },
  {
    name: 'Consultora Nicolly',
    role: 'Projetos e orçamentos',
    href: wa(PLACEHOLDERS.WHATSAPP_CONSULTOR_03, MSG.consultor),
  },
];

export const CONTACTS_DIRECAO = [
  {
    name: 'Karitas Valeska',
    role: 'Direção',
    href: wa(PLACEHOLDERS.WHATSAPP_DONA, MSG.dona),
  },
  {
    name: 'Gutemberg Azevedo',
    role: 'Direção',
    href: wa(PLACEHOLDERS.WHATSAPP_DONO, MSG.dono),
  },
];

export const SHOWROOM = [
  'images/02-pendentes-vidro.jpg',
  'images/06-luminaria-mesh.jpg',
  'images/05-pendente-vime.jpg',
  'images/08-luminaria-tripe.jpg',
  'images/09-pendentes-organicos.jpg',
];

export const INSPIRACOES = [
  {
    titulo: 'Pendentes de vidro',
    sub: 'Leveza para salas e bancadas',
    img: 'images/02-pendentes-vidro.jpg',
  },
  {
    titulo: 'Arandelas para espelho',
    sub: 'Luz de apoio para lavabos e halls',
    img: 'images/01-arandelas-espelho.jpg',
  },
  {
    titulo: 'Pendentes orgânicos',
    sub: 'Texturas naturais para áreas sociais',
    img: 'images/09-pendentes-organicos.jpg',
  },
  {
    titulo: 'Luminária de piso',
    sub: 'Ponto de luz para cantos de leitura',
    img: 'images/08-luminaria-tripe.jpg',
  },
  {
    titulo: 'Pendentes cilíndricos',
    sub: 'Iluminação pontual para bancadas',
    img: 'images/10-pendentes-cilindricos.jpg',
  },
];
