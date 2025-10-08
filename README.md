
#  Kord & Polleto – Portfólio Musical

Um projeto simples para mostrar as músicas dos artistas Kord & Polleto com integração do Spotify Web Playback SDK para tocar as faixas diretamente no site.

<img width="630" height="604" alt="image" src="https://github.com/user-attachments/assets/49d2bfb9-f35c-4a88-abfb-5ef1637e8126" />
<img width="630" height="604" alt="image" src="https://github.com/user-attachments/assets/3e9ab43d-4dbe-4be4-b8cd-c80bc4512d95" />
<img width="637" height="602" alt="Captura de tela 2025-10-08 170015" src="https://github.com/user-attachments/assets/80ae3c87-af89-4b3c-80d4-8a36458f6edf" />
<img width="630" height="604" alt="Captura de tela 2025-10-08 170022" src="https://github.com/user-attachments/assets/f1926320-72a9-4fd8-a3bc-e841962b3170" />

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
