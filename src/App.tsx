import React, { useState } from "react";
import "./index.css";
import kordImg from "./images/kord.jpg"; // imagem de Kord
import polletoImg from "./images/polleto.jpg"; // imagem de Polleto
import musicBgImg from "./images/bg1.jpg"; // imagem entre players e footer
import TalksFont from "./components/fonts/Talks.ttf";

const tracks = [
  "0EZg0SMRhC9KaiDEE4XAYC",
  "0F2INZqFuWY02dwEKYDcdy?si=d83be74d56ad4f9e",
  "4uOFGBx3fJ9eCjdbiTVMVD?si=fd765b34282c417e",
];

const App = () => {
  const [showKord, setShowKord] = useState(false);
  const [showPolleto, setShowPolleto] = useState(false);

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <style>
          {`
  @font-face {
    font-family: "Talks";
    src: url(${TalksFont}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  .talks-title {
    font-family: "Talks", sans-serif;
    letter-spacing: 0.5em; /* aumenta o espaçamento entre letras */
    color: #fff;
    font-size: 9rem;
    text-align: center;
    animation: glow-pump 5s ease-in-out infinite; /* animação contínua */
  }

  @keyframes glow-pump {
    0% {
      text-shadow: 0 0 2px #FFD700, 0 0 4px #FFD700, 0 0 8px #FFA500, 0 0 16px #FFA500;
    }
    50% {
      text-shadow: 0 0 5px #FFD700, 0 0 10px #FFD700, 0 0 20px #FFA500, 0 0 40px #FFA500;
    }
    100% {
      text-shadow: 0 0 2px #FFD700, 0 0 4px #FFD700, 0 0 8px #FFA500, 0 0 16px #FFA500;
    }
  }
  
`}
        </style>

        <h1 className="talks-title">KORD POLLETO</h1>
      </div>

      {/* Botões sobre Kord e Polleto */}
      <div className="about-buttons">
        <button onClick={() => setShowKord(!showKord)}>Sobre Kord</button>
        <button onClick={() => setShowPolleto(!showPolleto)}>
          Sobre Polleto
        </button>
      </div>
      <style>
        {`
  @font-face {
    font-family: "Talks";
    src: url(${TalksFont}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`}
      </style>

      {/* Kord */}
      {showKord && (
        <>
          <div className="story animate">
            <p>
              Gabriel Cordeiro de Carvalho, ou Kord, tem 28 anos e desde muito
              jovem demonstrou uma afinidade natural com a música. Começou suas
              aulas de violão aos 12 anos, mergulhando em ritmos variados e
              explorando acordes, melodias e técnicas que moldaram sua
              sensibilidade musical. Aos 16 anos, começou a produzir suas
              próprias músicas, desenvolvendo um domínio impressionante do FL
              Studio e Ableton, onde experimentava batidas, samples e efeitos
              com precisão e criatividade. Além de sua habilidade técnica como
              produtor, Kord possui um ouvido aguçado para harmonias e arranjos.
              Sua visão artística é única: ele consegue combinar influências do
              Trap e Pop e outros estilos contemporâneos em composições
              originais, criando músicas envolventes que carregam emoção e
              autenticidade. Sempre motivado pela paixão pela música, Kord
              transforma ideias em experiências sonoras completas.
            </p>
          </div>
          <img src={kordImg} alt="Kord" className="artist-img" />
        </>
      )}

      {/* Polleto */}
      {showPolleto && (
        <>
          <div className="story animate">
            <p>
              Thales Polleto Antonio, ou Polleto, tem 26 anos e sempre
              demonstrou uma paixão intensa pela música, especialmente pelo
              universo do Hip Hop e Trap. Desde jovem, ele explorou diversos
              instrumentos e técnicas de produção, mas foi a sua voz que se
              tornou seu verdadeiro instrumento principal. Com um timbre único,
              facilmente reconhecível, capaz de transitar entre notas graves
              cheias de profundidade e agudos cristalinos carregados de emoção,
              Polleto construiu um estilo vocal inconfundível que toca quem o
              ouve. Ele domina nuances de interpretação, sabe brincar com
              vibratos e pausas dramáticas, conseguindo transmitir sentimentos
              intensos em cada frase cantada. Seu domínio técnico, aliado à
              criatividade e sensibilidade artística, permite que ele se conecte
              de maneira profunda com o público.
            </p>
          </div>
          <img src={polletoImg} alt="Polleto" className="artist-img" />
        </>
      )}

      {/* Players */}
      <div className="players">
        {tracks.map((id) => (
          <iframe
            key={id}
            src={`https://open.spotify.com/embed/track/${id}`}
            frameBorder="0"
            allow="encrypted-media"
          ></iframe>
        ))}
      </div>

      {/* Imagem extra antes do footer */}
      <img src={musicBgImg} alt="Música" className="music-img" />

      {/* Footer */}
      <footer id="footer">
        Contato:{" "}
        <a href="https://instagram.com/gcordeir0" target="_blank">
          @gcordeir0
        </a>{" "}
        |{" "}
        <a href="https://instagram.com/7halesman" target="_blank">
          @7halesman
        </a>
      </footer>
    </div>
  );
};

export default App;
