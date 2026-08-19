export type ClassItem = {
  day: string;
  time: string;
  name: string;
  tag: string;
};

export type ModalityItem = {
  id: string;
  name: string;
  subtitle: string;
  category: "all" | "strength" | "cardio" | "fight" | "group";
  categoryLabel: string;
  description: string;
  intensity: "Moderada" | "Alta" | "Adaptável";
  duration: string;
  target: string;
  benefits: string[];
  image: string;
  badge: string;
};

export const site = {
  name: "S3 FITNESS",
  slug: "s3-fitness",
  tagline: "Seu treino. Seu ritmo.",
  location: "Várzea • Recife / PE",
  address: "R. João Francisco Lisboa, 170 — Várzea, Recife / PE",
  phone: "(81) 3228-3498",
  whatsappNumber: "558132283498",
  instagram: "https://www.instagram.com/s3fitnness/",
  facebook: "https://www.facebook.com/crossboxs3/",
  maps: "https://maps.google.com/?q=R.+João+Francisco+Lisboa,+170,+Várzea,+Recife+-+PE",
  hours: {
    weekdays: "05:30 — 22:00",
    saturday: "08:00 — 14:00",
    sunday: "Fechado",
  },
};

export const features = [
  { 
    number: "01", 
    title: "MUSCULAÇÃO", 
    text: "Equipamentos completos para força, hipertrofia e evolução contínua no seu ritmo." 
  },
  { 
    number: "02", 
    title: "TREINO FUNCIONAL", 
    text: "Circuitos dinâmicos para queimar calorias, ganhar mobilidade e resistência real." 
  },
  { 
    number: "03", 
    title: "AULAS COLETIVAS", 
    text: "Dança, ritmos e core com a energia de uma turma que te incentiva a não parar." 
  },
  { 
    number: "04", 
    title: "ARTES MARCIAIS", 
    text: "Desenvolva disciplina, agilidade, defesa pessoal e condicionamento de ponta." 
  },
];

export const modalities: ModalityItem[] = [
  {
    id: "musculacao",
    name: "Musculação",
    subtitle: "Força, Hipertrofia & Postura",
    category: "strength",
    categoryLabel: "Força & Hipertrofia",
    description: "Salão amplo com linha completa de pesos livres, halteres, barras e aparelhos para todos os grupos musculares. Tenha suporte de instrutores para ajustar sua postura e progredir com segurança.",
    intensity: "Adaptável",
    duration: "Livre (45 a 70 min)",
    target: "Iniciantes a avançados que buscam tônus, força, emagrecimento e longevidade.",
    benefits: [
      "Aparelhos modernos e pesos livres variados",
      "Instrutores de salão para orientar execução",
      "Foco em postura, saúde articular e evolução de cargas"
    ],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
    badge: "BASE DO TREINO",
  },
  {
    id: "funcional",
    name: "Treino Funcional",
    subtitle: "Condicionamento & Queima Calórica",
    category: "cardio",
    categoryLabel: "Condicionamento & Cardio",
    description: "Treinamento dinâmico que trabalha o corpo como um todo através de circuitos com kettlebells, cordas, caixas e peso corporal. Focado em queima de gordura, potência e fôlego.",
    intensity: "Alta",
    duration: "45 a 50 min",
    target: "Quem quer acelerar o metabolismo, sair da rotina e ganhar agilidade.",
    benefits: [
      "Alto gasto calórico e queima de gordura",
      "Melhora explosão, fôlego e coordenação motora",
      "Treinos dinâmicos e sempre variados"
    ],
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=85",
    badge: "ALTA INTENSIDADE",
  },
  {
    id: "coletivas",
    name: "Aulas Coletivas & Ritmos",
    subtitle: "Dança, Fit & Fortalecimento de Core",
    category: "group",
    categoryLabel: "Aulas em Grupo",
    description: "Aulas cheias de energia como FitDance, Ritmos e sessões focadas de Abdominal/Core. A melhor forma de queimar calorias enquanto se diverte com uma comunidade acolhedora.",
    intensity: "Moderada",
    duration: "45 min",
    target: "Quem gosta de treinar com música e companhia, melhorando o humor e o ritmo.",
    benefits: [
      "Melhora do ritmo, flexibilidade e coordenação",
      "Fortalecimento específico do abdômen e lombar",
      "Ambiente motivador e contagiante"
    ],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=85",
    badge: "ENERGIA & RITMO",
  },
  {
    id: "artes-marciais",
    name: "Artes Marciais / Lutas",
    subtitle: "Técnica, Defesa Pessoal & Foco",
    category: "fight",
    categoryLabel: "Luta & Disciplina",
    description: "Aprenda fundamentos técnicos de artes marciais em espaço apropriado. Trabalhe velocidade de reação, flexibilidade, controle mental e queima calórica intensa.",
    intensity: "Alta",
    duration: "60 min",
    target: "Homens e mulheres que buscam aprender defesa pessoal, aliviar o estresse e superar limites.",
    benefits: [
      "Desenvolvimento de disciplina e autoconfiança",
      "Condicionamento físico integral e agilidade",
      "Aulas estruturadas com técnica e respeito"
    ],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=85",
    badge: "DISCIPLINA & FOCO",
  },
];

export const classes: ClassItem[] = [
  { day: "SEG", time: "06:00", name: "Funcional", tag: "FORÇA" },
  { day: "SEG", time: "19:00", name: "Abdominal", tag: "CORE" },
  { day: "TER", time: "07:00", name: "Treino Coletivo", tag: "FULL BODY" },
  { day: "TER", time: "20:00", name: "Artes Marciais", tag: "FIGHT" },
  { day: "QUA", time: "06:00", name: "Funcional", tag: "FORÇA" },
  { day: "QUA", time: "19:00", name: "Dança", tag: "CARDIO" },
  { day: "QUI", time: "07:00", name: "Treino Coletivo", tag: "FULL BODY" },
  { day: "QUI", time: "20:00", name: "Artes Marciais", tag: "FIGHT" },
  { day: "SEX", time: "06:00", name: "Funcional", tag: "FORÇA" },
  { day: "SEX", time: "18:30", name: "Abdominal", tag: "CORE" },
];

export const testimonials = [
  { quote: "Professores super atenciosos e ambiente perfeito. A S3 é top de linha.", name: "Aluno S3", role: "Várzea, Recife" },
  { quote: "Academia organizada, funcional puxado no ponto certo e galera motivada.", name: "Aluna S3", role: "Várzea, Recife" },
  { quote: "Ótimo atendimento, estrutura completa e profissionais excelentes. Recomendo demais.", name: "Aluno S3", role: "Recife" },
];

export const gallery = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
    alt: "Treino de musculação S3",
    className: "gallery-tall",
  },
  {
    src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=85",
    alt: "Treino funcional S3",
    className: "gallery-wide",
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85",
    alt: "Pessoa treinando na S3",
    className: "",
  },
];