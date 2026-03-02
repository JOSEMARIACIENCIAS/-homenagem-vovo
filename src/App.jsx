import React, { useState } from 'react';

// Fundo animado com partículas químicas
function FundoParticulasQuimicas() {
  return (
    <div className="fundo-particulas">
      <svg className="atomo-svg atomo1" width="60" height="60" viewBox="0 0 60 60">
        <ellipse cx="30" cy="30" rx="24" ry="10" fill="none" stroke="#a97ff7" strokeWidth="2"/>
        <ellipse cx="30" cy="30" rx="10" ry="24" fill="none" stroke="#e67e22" strokeWidth="2"/>
        <circle cx="30" cy="30" r="6" fill="#ffe0b2" stroke="#7a3a8a" strokeWidth="2"/>
        <circle cx="54" cy="30" r="3" fill="#a97ff7" />
        <circle cx="30" cy="6" r="3" fill="#e67e22" />
        <circle cx="6" cy="30" r="3" fill="#7a3a8a" />
        <circle cx="30" cy="54" r="3" fill="#a97ff7" />
      </svg>
      <svg className="atomo-svg atomo2" width="60" height="60" viewBox="0 0 60 60">
        <circle cx="20" cy="30" r="8" fill="#e67e22" opacity="0.7" />
        <circle cx="40" cy="30" r="8" fill="#a97ff7" opacity="0.7" />
        <circle cx="30" cy="45" r="6" fill="#7a3a8a" opacity="0.7" />
        <line x1="20" y1="30" x2="40" y2="30" stroke="#ffe0b2" strokeWidth="3" />
        <line x1="20" y1="30" x2="30" y2="45" stroke="#ffe0b2" strokeWidth="3" />
        <line x1="40" y1="30" x2="30" y2="45" stroke="#ffe0b2" strokeWidth="3" />
      </svg>
    </div>
  );
}

function App() {
  const [showYoutube, setShowYoutube] = useState(false);

  return (
    <div className="homenagem-container">
      <FundoParticulasQuimicas />

      <header>
        <div className="foto-capa-container">
          <img src="/fotos/foto4.jpg" alt="Júlia Maria" className="foto-capa" />
        </div>
        <h1>Feliz 84 anos, Júlia Maria!</h1>
        <p className="mensagem">
          Hoje celebramos a vida de uma mulher extraordinária, que é o verdadeiro elemento essencial da nossa família. Júlia Maria, sua força, carinho e sabedoria são a base de tudo que somos. Que este dia seja repleto de amor, alegria e gratidão por tudo que você representa!
        </p>
      </header>

      <div className="player-musica">
        <button className="btn-musica" onClick={() => setShowYoutube(!showYoutube)}>
          {showYoutube ? 'Pausar Louvor' : 'Tocar Louvor'}
        </button>
        {showYoutube && (
          <div className="youtube-audio-player">
            <iframe width="1" height="1" style={{minWidth:'1px',minHeight:'1px',opacity:0.01}} src="https://www.youtube.com/embed/rxN3q1iFVAY?autoplay=1" title="Louvor" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div className="audio-instrucao">(O áudio será reproduzido. Para pausar, clique novamente no botão acima.)</div>
          </div>
        )}
      </div>

      <section className="versos-homenagem">
        <h2>Mulher Guerreira, Esteio da Família Vieira</h2>
        <div className="versos">
          <p>No dia da mulher nasceu uma estrela,<br/>
          Júlia Maria, guerreira, força tão bela.<br/>
          Em cada ruga, uma história de amor,<br/>
          Em cada olhar, esperança e calor.</p>
          <p>Esteio da família Vieira, raiz e flor,<br/>
          Com mãos de ternura, construiu o lar,<br/>
          Com coragem e fé, ensinou a lutar,<br/>
          E com seu abraço, nos faz sempre sonhar.</p>
          <p>Mulher de fibra, exemplo e luz,<br/>
          Que a vida inteira carrega a cruz,<br/>
          Mas nunca perde o brilho no olhar,<br/>
          E faz da simplicidade seu jeito de amar.</p>
          <p>Hoje celebramos seus 84 anos de vida,<br/>
          Com gratidão, alegria e emoção sentida.<br/>
          Júlia Maria, orgulho e inspiração,<br/>
          Nosso alicerce, nossa maior razão.</p>
        </div>
      </section>

      {/* Adicione aqui galeria, depoimentos, botão de compartilhar, etc. */}

    </div>
  );
}

export default App;

import React, { useState, useRef, useEffect } from 'react';

// Fundo animado com partículas químicas
function FundoParticulasQuimicas() {
  return (
    <div className="fundo-particulas">
      <svg className="atomo-svg atomo1" width="60" height="60" viewBox="0 0 60 60">
        <ellipse cx="30" cy="30" rx="24" ry="10" fill="none" stroke="#a97ff7" strokeWidth="2"/>
        <ellipse cx="30" cy="30" rx="10" ry="24" fill="none" stroke="#e67e22" strokeWidth="2"/>
        <circle cx="30" cy="30" r="6" fill="#ffe0b2" stroke="#7a3a8a" strokeWidth="2"/>
        <circle cx="54" cy="30" r="3" fill="#a97ff7" />
        <circle cx="30" cy="6" r="3" fill="#e67e22" />
        <circle cx="6" cy="30" r="3" fill="#7a3a8a" />
        <circle cx="30" cy="54" r="3" fill="#a97ff7" />
      </svg>
      <svg className="atomo-svg atomo2" width="60" height="60" viewBox="0 0 60 60">
        <circle cx="20" cy="30" r="8" fill="#e67e22" opacity="0.7" />
        <circle cx="40" cy="30" r="8" fill="#a97ff7" opacity="0.7" />
        <circle cx="30" cy="45" r="6" fill="#7a3a8a" opacity="0.7" />
        <line x1="20" y1="30" x2="40" y2="30" stroke="#ffe0b2" strokeWidth="3" />
        <line x1="20" y1="30" x2="30" y2="45" stroke="#ffe0b2" strokeWidth="3" />
        <line x1="40" y1="30" x2="30" y2="45" stroke="#ffe0b2" strokeWidth="3" />
      </svg>
    </div>
  );
}

function App() {
  // Exemplo de hooks e estados principais
  const [showYoutube, setShowYoutube] = useState(false);
  // Adicione outros hooks e estados conforme necessário

  return (
    <div className="homenagem-container">
      <FundoParticulasQuimicas />
      {/* Coloque aqui o restante do seu layout, contagem regressiva, player, depoimentos, galeria, etc. */}
      <header>
        <div className="foto-capa-container">
          <img src="/fotos/foto4.jpg" alt="Júlia Maria" className="foto-capa" />
        </div>
        <h1>Feliz 84 anos, Júlia Maria!</h1>
        <p className="mensagem">
          Hoje celebramos a vida de uma mulher extraordinária, que é o verdadeiro elemento essencial da nossa família. Júlia Maria, sua força, carinho e sabedoria são a base de tudo que somos. Que este dia seja repleto de amor, alegria e gratidão por tudo que você representa!
        </p>
      </header>
      {/* Exemplo de player de música */}
      <div className="player-musica">
        <button className="btn-musica" onClick={() => setShowYoutube(!showYoutube)}>
          {showYoutube ? 'Pausar Louvor' : 'Tocar Louvor'}
        </button>
        {showYoutube && (
          <div className="youtube-audio-player">
            <iframe width="1" height="1" style={{minWidth:'1px',minHeight:'1px',opacity:0.01}} src="https://www.youtube.com/embed/rxN3q1iFVAY?autoplay=1" title="Louvor" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div className="audio-instrucao">(O áudio será reproduzido. Para pausar, clique novamente no botão acima.)</div>
          </div>
        )}
      </div>
      {/* Adicione aqui as seções de versos, galeria, depoimentos, botão de compartilhar, etc. */}
    </div>
  );
}

export default App;

  const [showYoutube, setShowYoutube] = useState(false);
  return (
    <div className="homenagem-container">
      <Countdown />
      <div className="player-musica">
        <button className="btn-musica" onClick={() => setShowYoutube(!showYoutube)}>
          {showYoutube ? 'Pausar Louvor' : 'Tocar Louvor'}
        </button>
        {showYoutube && (
          <div className="youtube-audio-player">
            <iframe width="1" height="1" style={{minWidth:'1px',minHeight:'1px',opacity:0.01}} src="https://www.youtube.com/embed/rxN3q1iFVAY?autoplay=1" title="Louvor" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div className="audio-instrucao">(O áudio será reproduzido. Para pausar, clique novamente no botão acima.)</div>
          </div>
        )}
      </div>
      <header>
        <div className="foto-capa-container">
          <img src="/fotos/foto4.jpg" alt="Júlia Maria" className="foto-capa" />
        </div>
        <h1>Feliz 84 anos, Júlia Maria!</h1>
        <p className="mensagem">
          Hoje celebramos a vida de uma mulher extraordinária, que é o verdadeiro elemento essencial da nossa família. Júlia Maria, sua força, carinho e sabedoria são a base de tudo que somos. Que este dia seja repleto de amor, alegria e gratidão por tudo que você representa!
        </p>
      </header>


      <section className="versos-homenagem">
        <h2>Mulher Guerreira, Esteio da Família Vieira</h2>
        <div className="versos">
          <p>No dia da mulher nasceu uma estrela,<br/>
          Júlia Maria, guerreira, força tão bela.<br/>
          Em cada ruga, uma história de amor,<br/>
          Em cada olhar, esperança e calor.</p>
          <p>Esteio da família Vieira, raiz e flor,<br/>
          Com mãos de ternura, construiu o lar,<br/>
          Com coragem e fé, ensinou a lutar,<br/>
          E com seu abraço, nos faz sempre sonhar.</p>
          <p>Mulher de fibra, exemplo e luz,<br/>
          Que a vida inteira carrega a cruz,<br/>
          Mas nunca perde o brilho no olhar,<br/>
          E faz da simplicidade seu jeito de amar.</p>
          <p>Hoje celebramos seus 84 anos de vida,<br/>
          Com gratidão, alegria e emoção sentida.<br/>
          Júlia Maria, orgulho e inspiração,<br/>
          Nosso alicerce, nossa maior razão.</p>
        </div>
      </section>


      <div className="compartilhar fade-in">
        {/* Botão de compartilhar ou conteúdo aqui */}
      </div>


    </div>
  );
}

export default App;
