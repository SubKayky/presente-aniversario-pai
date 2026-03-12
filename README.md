# Presente de Aniversario para Pai (React + Vite)

Projeto completo de uma pagina web emocional e premium para homenagear um pai no aniversario.

Todo o conteudo esta em portugues do Brasil, com foco em:
- visual elegante e sentimental
- boa experiencia no celular
- animacoes suaves
- personalizacao centralizada em um unico arquivo
- funcionamento 100% front-end (sem backend)

## Tecnologias
- React + Vite
- CSS global customizado (sem biblioteca de UI pesada)
- `framer-motion` (animacoes)
- `lucide-react` (icones)
- `canvas-confetti` (surpresa final)

## Funcionalidades implementadas
- Hero impactante com CTA
- Carta principal emocional
- Cards de qualidades
- Timeline de memorias
- Galeria responsiva com modal de imagem ampliada
- Frases/licoes em slider horizontal suave
- Secao de toques humanos
- Contadores simbolicos com animacao de subida
- Encerramento com CTA final
- Modal surpresa com certificado e confete
- Navbar elegante com menu responsivo
- Scroll suave entre secoes
- Loading inicial
- Efeito de fundo com brilho/particulas discretas
- Trilha sonora opcional (sem autoplay forçado)

## Estrutura de pastas
```text
src/
  components/
    BackgroundEffects.jsx
    CounterSection.jsx
    FinalSection.jsx
    Footer.jsx
    FunSection.jsx
    GallerySection.jsx
    Hero.jsx
    LetterSection.jsx
    LoadingScreen.jsx
    Navbar.jsx
    QualitiesSection.jsx
    QuotesSection.jsx
    SurpriseModal.jsx
    TimelineSection.jsx
  data/
    fatherData.js
  assets/
    images/
      memory-1.svg ... memory-8.svg
  styles/
    global.css
  App.jsx
  main.jsx
public/
  audio/
    README.txt
index.html
README.md
```

## Como instalar dependencias
No terminal, dentro da pasta do projeto:

```bash
npm install
```

## Como rodar localmente
```bash
npm run dev
```

Depois abra o link mostrado no terminal (normalmente `http://localhost:5173`).

## Arquivos para editar primeiro (personalizacao)
Edite primeiro:

1. `src/data/fatherData.js`
- `fatherName` (nome do pai)
- textos da hero
- carta principal
- qualidades
- timeline
- frases
- toques humanos
- contadores
- mensagem final e surpresa
- labels de navegacao

2. `src/assets/images/`
- Troque os arquivos `memory-1.svg` ... `memory-8.svg` por fotos reais.
- Mantenha os nomes dos arquivos ou atualize os imports em `fatherData.js`.

3. `public/audio/trilha.mp3` (opcional)
- Coloque sua musica com esse nome para habilitar a trilha sonora.
- O play acontece somente quando a pessoa clicar no botao (sem autoplay).

## Onde trocar as imagens
- Pasta: `src/assets/images/`
- Referencias: `src/data/fatherData.js` no bloco `gallery.photos`

## Como gerar build final
```bash
npm run build
```

Observacao: antes do build, o projeto otimiza automaticamente as fotos da galeria para WebP.

Arquivos finais de producao vao para:

```text
dist/
```

Para visualizar o build localmente:

```bash
npm run preview
```

## Galeria mais leve
- As imagens em `src/assets/images` sao convertidas para `src/assets/images/optimized` via `sharp`.
- Para rodar essa etapa manualmente:

```bash
npm run optimize:gallery
```

## Observacoes de edicao
- O design foi feito para ser elegante e facilmente ajustavel.
- Quase todo o conteudo textual esta centralizado em `fatherData.js`.
- Estilos globais e componentes foram comentados e organizados para facilitar alteracoes.
