const optimizedGalleryModules = import.meta.glob(
  '../assets/images/optimized/*.{webp,avif,WEBP,AVIF}',
  {
    eager: true,
    import: 'default',
  },
);

const sortedGalleryEntries = Object.entries(optimizedGalleryModules).sort(([pathA], [pathB]) =>
  pathA.localeCompare(pathB, 'pt-BR', { numeric: true, sensitivity: 'base' }),
);

const galleryPhotos = sortedGalleryEntries.map(([filePath, src], index) => {
  const fileName = filePath.split('/').pop() ?? `foto-${index + 1}`;
  const normalizedName = fileName
    .replace(/\.[^/.]+$/, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const baseName = fileName.replace(/\.[^/.]+$/, '');

  // Ajustes finos de enquadramento para destacar pessoas nas fotos mais sensiveis.
  const focusByFileName = {
    '20250920_173235': '50% 92%',
    'IMG-20230618-WA0001': '50% 90%',
  };

  return {
    src,
    alt: `Memória ${index + 1} - ${normalizedName}`,
    focus: focusByFileName[baseName] ?? '50% 50%',
  };
});

// Arquivo central de personalização.
// Edite os textos, nomes, eventos e imagens aqui para adaptar a homenagem.
export const fatherData = {
  fatherName: 'Cláudio',

  loading: {
    title: 'Preparando uma homenagem especial...',
    subtitle: 'Cada detalhe foi pensado com muito carinho.',
  },

  hero: {
    title: 'Feliz Aniversário, Pai',
    subtitle:
      'Hoje é dia de celebrar a sua história, sua presença e tudo o que o seu amor construiu dentro de mim.',
    ctaText: 'Começar homenagem',
    supportText: 'Um presente digital feito para emocionar e agradecer.',
  },

  letter: {
    title: 'Uma carta aberta para o melhor pai do mundo',
    paragraphs: [
      'Pai, neste aniversário eu quero te agradecer por tudo o que você sempre foi: base firme, abraço seguro e exemplo de dignidade. Com você aprendi que amor de verdade aparece nas atitudes pequenas de todos os dias.',
      'Você me ensinou a ter coragem sem perder a gentileza, a sonhar alto sem esquecer de onde eu vim e a respeitar as pessoas com humildade. Cada conselho seu ecoa em mim quando preciso tomar uma decisão importante.',
      'Mesmo nos dias corridos, sua presença sempre foi abrigo. Seu jeito de cuidar, proteger e incentivar fez toda diferença na pessoa que estou me tornando.',
      'Hoje eu celebro sua vida com gratidão. Que seu novo ciclo venha com saúde, paz, alegrias sinceras e muitos momentos especiais ao lado de quem te ama.',
    ],
    signature: 'Com todo meu amor e admiração.',
  },

  qualities: {
    title: 'Qualidades que me inspiram',
    subtitle: 'Tudo isso é editável para você personalizar com o seu jeito de homenagear.',
    items: [
      {
        icon: 'ShieldCheck',
        title: 'Proteção',
        description: 'Seu cuidado sempre me fez sentir seguro, mesmo nos dias difíceis.',
      },
      {
        icon: 'HeartHandshake',
        title: 'Carinho',
        description: 'Você demonstra amor com atitudes silenciosas e extremamente valiosas.',
      },
      {
        icon: 'Brain',
        title: 'Sabedoria',
        description: 'Seus conselhos são diretos, honestos e sempre chegam no momento certo.',
      },
      {
        icon: 'Laugh',
        title: 'Bom humor',
        description: 'Seu jeito leve transforma qualquer dia comum em uma lembrança feliz.',
      },
      {
        icon: 'Hammer',
        title: 'Dedicação',
        description: 'Seu esforço diário sempre foi exemplo de responsabilidade e coragem.',
      },
      {
        icon: 'Compass',
        title: 'Direção',
        description: 'Quando me senti perdido, você foi o norte que me trouxe de volta.',
      },
    ],
  },

  timeline: {
    title: 'Linha do tempo das nossas memórias',
    subtitle: 'Momentos que marcaram nossa história e merecem ser celebrados.',
    items: [
      {
        year: '2007',
        title: 'Os primeiros passos',
        description: 'Você segurou minha mão para eu aprender a caminhar com confiança.',
      },
      {
        year: '2012',
        title: 'Conselhos que ficaram',
        description: 'Foi quando comecei a entender o valor das suas palavras firmes e carinhosas.',
      },
      {
        year: '2016',
        title: 'Viagens e descobertas',
        description: 'Nossos passeios viraram memórias que eu guardo com muito afeto.',
      },
      {
        year: '2019',
        title: 'Risadas inesquecíveis',
        description: 'Aqueles momentos simples em família viraram os mais especiais.',
      },
      {
        year: '2022',
        title: 'Apoio nas fases difíceis',
        description: 'Você esteve presente quando eu mais precisei de força e acolhimento.',
      },
      {
        year: 'Hoje',
        title: 'Gratidão por tudo',
        description: 'Seu aniversário é o dia perfeito para dizer o quanto eu te admiro.',
      },
    ],
  },

  gallery: {
    title: 'Galeria de memórias',
    autoPlayDelayMs: 10000,
    photos: galleryPhotos,
  },

  quotes: {
    title: 'Frases e lições que aprendi com você',
    subtitle: 'Palavras que guiaram minha caminhada e continuam vivas em mim.',
    items: [
      {
        text: 'Faça o certo, mesmo quando ninguém estiver olhando.',
        context: 'Lição sobre caráter e integridade.',
      },
      {
        text: 'Respeito abre portas que a força não abre.',
        context: 'Lição sobre humildade e convivência.',
      },
      {
        text: 'Cuide da sua família, porque ela é seu maior tesouro.',
        context: 'Lição de amor e prioridade.',
      },
    ],
  },

  funMoments: {
    title: 'Coisas que só meu pai faz',
    subtitle: 'Detalhes divertidos e carinhosos que deixam nossa convivência única.',
    items: [
      {
        title: 'Piadas no momento certo',
        description: 'Quando o clima fica tenso, você encontra um jeito de arrancar risadas.',
      },
      {
        title: 'Conselho com história',
        description: 'Cada conselho vem acompanhado de uma história que fica na memória.',
      },
      {
        title: 'Radar de cuidado',
        description: 'Você percebe quando algo não está bem antes mesmo de eu falar.',
      },
    ],
  },

  counters: {
    title: 'Um carinho em números simbólicos',
    subtitle: 'Não são cálculos exatos, são formas poéticas de mostrar a sua grandeza.',
    items: [
      {
        value: 9999,
        suffix: '+',
        label: 'Conselhos valiosos',
        description: 'Palavras que me fortalecem em cada fase da vida.',
      },
      {
        value: 1200,
        suffix: '+',
        label: 'Momentos inesquecíveis',
        description: 'Memórias de afeto, parceria e aprendizado.',
      },
      {
        value: 36500,
        suffix: '+',
        label: 'Razões para admirar você',
        description: 'Uma vida inteira de exemplo, amor e presença.',
      },
    ],
  },

  finalSection: {
    title: 'Obrigado por tudo, Pai',
    message:
      'Se hoje eu sou quem sou, uma parte enorme disso vem de você. Obrigado por cada gesto de amor, cada sacrifício silencioso e cada palavra que me levantou.',
    highlight:
      'Que este novo ano da sua vida seja repleto de saúde, paz, alegria e muito orgulho por tudo o que você construiu.',
    buttonText: 'Ver mensagem final',
  },

  surprise: {
    preTitle: 'Uma última surpresa',
    certificateTitle: 'Certificado Oficial',
    certificateSubtitle: 'Melhor Pai do Mundo',
    recipientLabel: 'Concedido a',
    recipient: 'Meu Pai',
    reason:
      'Por amor incondicional, dedicação constante, paciência admirável e por transformar cada dia comum em uma lembrança especial.',
    finalMessage:
      'Pai, você é meu porto seguro, minha referência e uma das minhas maiores inspirações. Eu te amo e te celebro hoje e sempre.',
    closing: 'Feliz aniversário, com carinho eterno.',
    buttonText: 'Comemorar novamente',
  },

  soundtrack: {
    enabled: true,
    buttonLabel: 'Trilha sonora',
    helperText: 'Toque para reproduzir a trilha da homenagem.',
    src: '/audio/trilha.mp3',
  },

  footer: {
    message: 'Feito com amor para celebrar uma história extraordinária.',
  },

  navigation: [
    { label: 'Início', target: 'inicio' },
    { label: 'Carta', target: 'mensagem' },
    { label: 'Qualidades', target: 'qualidades' },
    { label: 'Memórias', target: 'memorias' },
    { label: 'Galeria', target: 'galeria' },
    { label: 'Lições', target: 'licoes' },
    { label: 'Toques', target: 'toques' },
    { label: 'Simbólico', target: 'simbolico' },
    { label: 'Final', target: 'final' },
  ],
};
