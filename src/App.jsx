import React, { useState, useEffect } from "react";
import "./App.css";
import {
  FaGift,
  FaHeart,
  FaPlay,
  FaPause,
  FaShareAlt,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaBirthdayCake,
  FaStar,
} from "react-icons/fa";
import { Analytics } from "@vercel/analytics/react";

function Confetti() {
  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 3,
    animationDuration: 3 + Math.random() * 2,
  }));

  return (
    <div className="confetti-container">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.animationDelay}s`,
            animationDuration: `${piece.animationDuration}s`,
            backgroundColor: [
              "#ff6b9d",
              "#c44569",
              "#f7b731",
              "#5f27cd",
              "#00d2d3",
              "#ff9ff3",
            ][piece.id % 6],
          }}
        />
      ))}
    </div>
  );
}

function Countdown() {
  const targetDate = new Date(2026, 2, 8, 0, 0, 0); // mês 2 = março (0-index)
  const [timeLeft, setTimeLeft] = useState(() => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
    }

    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds, isComplete: false };
  });

  function getTimeLeft() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
    }

    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds, isComplete: false };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (timeLeft.isComplete) {
    return (
      <>
        <Confetti />
        <div className="birthday-celebration">
          <div className="celebration-icon bounce">
            <FaGift />
          </div>
          <h1 className="celebration-title">Parabéns, vovó Júlia Maria!</h1>
          <p className="celebration-message">
            Hoje é o seu dia especial!{" "}
            <FaBirthdayCake className="inline-icon" />{" "}
            <FaStar className="inline-icon" />
          </p>
          <p className="celebration-subtitle">
            Que este novo ano de vida seja repleto de alegrias, saúde e amor!{" "}
            <FaHeart className="inline-icon heart-icon" />
          </p>
        </div>
      </>
    );
  }

  return (
    <div className="countdown-container destaque pulse">
      <div className="countdown-icon">
        <FaGift />
      </div>
      <span className="countdown-title">
        Faltam apenas{" "}
        <span className="countdown-days">
          {timeLeft.days} dia{timeLeft.days === 1 ? "" : "s"}
        </span>{" "}
        para o aniversário de Júlia Maria!
      </span>
      <div className="countdown-numbers">
        <div className="countdown-item">
          <span className="number">
            {String(timeLeft.days).padStart(2, "0")}
          </span>
          <span className="label">Dias</span>
        </div>
        <span className="separator">:</span>
        <div className="countdown-item">
          <span className="number">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          <span className="label">Horas</span>
        </div>
        <span className="separator">:</span>
        <div className="countdown-item">
          <span className="number">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          <span className="label">Min</span>
        </div>
        <span className="separator">:</span>
        <div className="countdown-item">
          <span className="number">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          <span className="label">Seg</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [showYoutube, setShowYoutube] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedNovaIndex, setSelectedNovaIndex] = useState(null);

  // Fotos novas
  const fotosNovas = [
    {
      src: "/fotos_novas/foto1.jpeg",
      alt: "Foto nova 1",
      legenda: "Novo momento especial 1",
    },
    {
      src: "/fotos_novas/foto2.jpeg",
      alt: "Foto nova 2",
      legenda: "Novo momento especial 2",
    },
    {
      src: "/fotos_novas/foto3.jpeg",
      alt: "Foto nova 3",
      legenda: "Novo momento especial 3",
    },
    {
      src: "/fotos_novas/foto4.jpeg",
      alt: "Foto nova 4",
      legenda: "Novo momento especial 4",
    },
    {
      src: "/fotos_novas/foto5.jpeg",
      alt: "Foto nova 5",
      legenda: "Novo momento especial 5",
    },
{
      src: "/fotos_novas/foto6.jpeg",
      alt: "Foto nova 6",
      legenda: "Novo momento especial 6",
    },
{
      src: "/fotos_novas/foto7.jpeg",
      alt: "Foto nova 7",
      legenda: "Novo momento especial 7",
    },


  ];

  // Fotos antigas
  const fotos = [
    {
      src: "/fotos/foto1.jpg",
      alt: "Júlia Maria e filhos",
      legenda: "Júlia Maria e seus filhos reunidos",
    },
    {
      src: "/fotos/foto2.jpg",
      alt: "Família reunida",
      legenda: "Família reunida em um momento especial",
    },
    {
      src: "/fotos/foto3.jpg",
      alt: "Júlia Maria e filhos",
      legenda: "Mais um momento de união familiar",
    },
    {
      src: "/fotos/foto6op.png",
      alt: "Júlia Maria",
      legenda: "Júlia Maria, a homenageada",
    },
    {
      src: "/fotos/foto8op.png",
      alt: "Júlia Maria",
      legenda: "Júlia Maria em um momento especial",
    },
  ];

  // Lightbox para fotos antigas
  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };
  // Lightbox para fotos novas
  const openNovaLightbox = (index) => {
    setSelectedNovaIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };
  const closeNovaLightbox = () => {
    setSelectedNovaIndex(null);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % fotos.length);
  };
  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + fotos.length) % fotos.length);
  };
  // Navegação para fotos novas
  const nextNovaImage = () => {
    setSelectedNovaIndex((prev) => (prev + 1) % fotosNovas.length);
  };
  const prevNovaImage = () => {
    setSelectedNovaIndex((prev) => (prev - 1 + fotosNovas.length) % fotosNovas.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex !== null) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
      }
      if (selectedNovaIndex !== null) {
        if (e.key === "Escape") closeNovaLightbox();
        if (e.key === "ArrowRight") nextNovaImage();
        if (e.key === "ArrowLeft") prevNovaImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, selectedNovaIndex]);

  return (
    <div className="homenagem-container">
      <Countdown />
      <div className="player-musica">
        <button
          className="btn-musica"
          onClick={() => setShowYoutube(!showYoutube)}
        >
          {showYoutube ? (
            <>
              <FaPause /> Pausar Louvor
            </>
          ) : (
            <>
              <FaPlay /> Tocar Louvor
            </>
          )}
        </button>
        {showYoutube && (
          <div className="youtube-audio-player">
            <iframe
              width="1"
              height="1"
              style={{ minWidth: "1px", minHeight: "1px", opacity: 0.01 }}
              src="https://www.youtube.com/embed/rxN3q1iFVAY?autoplay=1"
              title="Louvor"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      <header>
        <div className="foto-capa-container">
          <img src="/fotos/foto4.jpg" alt="Júlia Maria" className="foto-capa" />
        </div>
        <h1>O Altar da Vida: Julia Maria, Nossa Raiz de Oitenta e Quatro Anos</h1>
      </header>
      {/* Seção de vídeos dos netos e bisnetos */}
      <section style={{ margin: '2rem 0' }}>
        <h2 style={{ textAlign: 'center', color: '#4B0082' }}>Mensagens dos Netos e Bisnetos</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
          <video width="320" height="240" controls>
            <source src="/videos/video1.mp4" type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>
          <video width="320" height="240" controls>
            <source src="/videos/video2.mp4" type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>
          <video width="320" height="240" controls>
            <source src="/videos/video3.mp4" type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>
<video width="320" height="240" controls>
            <source src="/videos/video4.mp4" type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>
<video width="320" height="240" controls>
            <source src="/videos/video5.mp4" type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>
<video width="320" height="240" controls>
            <source src="/videos/video6.mp4" type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>

          <video width="320" height="240" controls>
            <source src="/videos/video7.mp4" type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>

          <video width="320" height="240" controls>
            <source src="/videos/video8.mp4" type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>

           <video width="320" height="240" controls>
            <source src="/videos/video9.mp4" type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>
                    <video width="320" height="240" controls>
            <source src="/videos/video10.mp4" type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>

  <video width="320" height="240" controls>
            <source src="/videos/video11.mp4" type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>

  <video width="320" height="240" controls>
            <source src="/videos/video12.mp4" type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>

        </div>
      </section>

      <header>
        <div className="foto-capa-container">
          <img src="/fotos/foto4.jpg" alt="Júlia Maria" className="foto-capa" />
        </div>
        <h1>O Altar da Vida: Julia Maria, Nossa Raiz de Oitenta e Quatro Anos</h1>
      </header>
      <section className="versos-homenagem">
        <h2 style={{ textAlign: 'center', color: '#7a3a8a', marginBottom: '1em' }}>Poesia em Homenagem</h2>
        <div className="versos">
          <p>
            Escutem bem este nome que o vento carrega,<br/>
            Julia Maria, a força que não se entrega.<br/>
            Olhem para essas mãos, marcadas pelo tempo,<br/>
            Calejadas de vida, de luto e de vento.<br/>
            Mãos que embalaram o choro, que limparam o chão,<br/>
            Mãos que multiplicaram o pouco em muito pão.
          </p>
          <p>
            Vovó, hoje o silêncio fala mais que a folia,<br/>
            Pois em cada canto do Brasil, há uma nostalgia.<br/>
            Lá nas terras de Minas, entre serras e neblina,<br/>
            Tem neto chorando, sentindo a sua luz divina.<br/>
            Tem neto distante, com o peito apertado,<br/>
            Querendo ser o ar para estar ao seu lado.
          </p>
          <p>
            Eu mesmo, daqui, sinto o nó na garganta,<br/>
            Pois o amor que sinto por ti é o que me levanta.<br/>
            Dói não poder tocar sua pele cansada,<br/>
            Dói não ser o seu guia nesta caminhada.<br/>
            Mas saiba, guerreira de oitenta e quatro janeiros,<br/>
            Que seus netos e bisnetos são seus herdeiros.<br/>
            Não de ouro ou de bens, mas de fibra e de cor,<br/>
            Herdeiros do seu rastro infinito de amor.
          </p>
          <p>
            A senhora é o tronco que o tempo não verga,<br/>
            A luz que a família, no escuro, enxerga.<br/>
            Filhos, netos e bisnetos... veja a multidão!<br/>
            Todos batendo no ritmo do seu coração.<br/>
            Aqueles que não vieram, estão aí no seu colo,<br/>
            Nas lágrimas que caem e molham este solo.
          </p>
          <p>
            Choramos, sim, mas de gratidão profunda,<br/>
            Por ter a senhora nesta terra fecunda.<br/>
            Que Deus te sustente, nossa amada Maria,<br/>
            Pois sem o seu brilho, não haveria o dia.<br/>
            Sinta o abraço de quem está longe e de quem está perto,<br/>
            Pois o seu amor, vovó, é o nosso único porto certo.
          </p>
        </div>
        <div style={{ textAlign: 'right', marginTop: '1.5em', fontStyle: 'italic', color: '#7a3a8a', fontSize: '1.05em' }}>
          <span style={{
            color: '#b30059',
            fontWeight: 'bold',
            fontSize: '1.35em',
            background: 'linear-gradient(90deg, #ffe0f7 0%, #fff 100%)',
            padding: '0.2em 0.7em',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(179,0,89,0.08)'
          }}>
            — Autor: José Maria (neto)
          </span>
        </div>
      </section>
      {/* Seção de fotos novas */}
      <section className="galeria-fotos-novas">
        <h2 style={{ color: '#b30059' }}>Fotos Recentes</h2>
        <div className="fotos-lista">
          {fotosNovas.map((foto, index) => (
            <div className="foto-item" key={"nova-" + index} onClick={() => openNovaLightbox(index)} style={{cursor:'pointer'}}>
              <img src={foto.src} alt={foto.alt} />
              <div className="legenda">{foto.legenda} <span style={{color:'#b30059', fontWeight:'bold', fontSize:'0.95em', marginLeft:'0.5em'}}>Novo</span></div>
            </div>
          ))}
        </div>
        {/* Lightbox/apresentação para fotos novas */}
        {selectedNovaIndex !== null && (
          <div className="lightbox" onClick={closeNovaLightbox} style={{animation:'fadeIn 0.4s'}}>
            <button className="lightbox-close" onClick={closeNovaLightbox}>
              <FaTimes />
            </button>
            <button
              className="lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                prevNovaImage();
              }}
            >
              <FaChevronLeft />
            </button>
            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
              style={{transition:'all 0.4s'}}
            >
              <img
                key={selectedNovaIndex}
                src={fotosNovas[selectedNovaIndex].src}
                alt={fotosNovas[selectedNovaIndex].alt}
                style={{maxHeight:'70vh', maxWidth:'90vw', borderRadius:'12px', boxShadow:'0 4px 24px rgba(179,0,89,0.13)'}}
              />
              <div className="lightbox-legenda">
                {fotosNovas[selectedNovaIndex].legenda}
              </div>
              <div className="lightbox-counter">
                {selectedNovaIndex + 1} / {fotosNovas.length}
              </div>
            </div>
            <button
              className="lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                nextNovaImage();
              }}
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </section>

      {/* Seção de fotos antigas */}
      <section className="galeria-fotos">
        <h2>Momentos em Família</h2>
        <div className="fotos-lista">
          {fotos.map((foto, index) => (
            <div
              className="foto-item"
              key={index}
              onClick={() => openLightbox(index)}
            >
              <img src={foto.src} alt={foto.alt} />
              <div className="legenda">{foto.legenda}</div>
            </div>
          ))}
        </div>
      </section>

      {selectedImageIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <FaTimes />
          </button>
          <button
            className="lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <FaChevronLeft />
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={selectedImageIndex}
              src={fotos[selectedImageIndex].src}
              alt={fotos[selectedImageIndex].alt}
            />
            <div className="lightbox-legenda">
              {fotos[selectedImageIndex].legenda}
            </div>
            <div className="lightbox-counter">
              {selectedImageIndex + 1} / {fotos.length}
            </div>
          </div>
          <button
            className="lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <FaChevronRight />
          </button>
        </div>)}
      <div className="countdown-labels" style={{fontSize:'0.9rem', color:'#888'}}>Dias Horas Min Seg</div>
      <Analytics />
    </div>
  );
}
export default App;
