
#  Kord & Polleto – Portfólio Musical

Um projeto simples para mostrar as músicas dos artistas Kord & Polleto com integração do Spotify Web Playback SDK para tocar as faixas diretamente no site.

# 🎵 Funcionalidades

Exibição das músicas dos artistas Kord e Polleto.

Player integrado do Spotify para tocar as músicas.

Visual limpo e responsivo, destacando capa das faixas.

Fácil de atualizar com novas músicas.

# 💻 Tecnologias Utilizadas

React.js

Tailwind CSS (opcional)

Spotify Web Playback SDK

HTML5 & CSS3

# ⚡ Instalação

Clone o repositório:

git clone https://github.com/seu-usuario/kord-polletto-portfolio.git


Instale as dependências:

npm install
# ou
yarn install


Configure seu token do Spotify no projeto. (Necessário para o player funcionar)

Inicie o projeto:

npm start
# ou
yarn start

# 🖌️ Estrutura do Projeto

/src/components → Componentes React (Player, Lista de músicas, Cabeçalho)

/src/assets → Imagens e fontes

/src/utils → Funções auxiliares (como integração com Spotify API)

# 📄 Exemplo de Uso
import SpotifyPlayer from './components/SpotifyPlayer';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Kord & Polleto</h1>
      </header>
      <SpotifyPlayer token={SPOTIFY_ACCESS_TOKEN} />
    </div>
  );
}

export default App;

# 🎨 Personalização

Substitua o SPOTIFY_ACCESS_TOKEN pelo seu token de acesso do Spotify.

Adicione imagens de cada artista para dar destaque visual.

Modifique o layout com Tailwind CSS para se adequar ao seu estilo.

# 📝 Licença

MIT License

Feito com 🎶 por Gabriel Cordeiro de Carvalho
