import React, { useEffect, useRef } from 'react';
import './css/App.css';
import phoneLogo from './assets/phone_with_logo.png';
import womanHoldingPhone from './assets/woman_holding_phone.jpg';
import stores from './assets/stores.png';
import Header from './components/Header';

const App = () => {
  const heroSectionRef = useRef(null);
  const productSectionRef = useRef(null); // ref para la segunda sección

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.fade-in-up');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProduct = () => {
    if (productSectionRef.current) {
      // @ts-ignore
      productSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHero = () => {
    if (heroSectionRef.current) {
      // @ts-ignore
      heroSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='welcome'>
      <Header />
      {/* Hero Section */}
      <div className='min-h-screen w-full bg-[#f9fafb] relative'>
        <div
          className='absolute inset-0 z-0'
          style={{
            backgroundImage: `
              linear-gradient(to right, #d1d5db 1px, transparent 1px),
              linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
            WebkitMaskImage:
              'radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)',
            maskImage:
              'radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)',
          }}
        />
      </div>
      <section className='hero' ref={heroSectionRef}>
        <div className='hero-content'>
          <h1>
            Reservá <span style={{ color: '#27A6F5' }}>fácil</span> <br />
            <span>Viví mejor.</span>
          </h1>

          <div className='buttons'>
            <div className='btn primary'>Trabajá con nosotros</div>
            <button onClick={scrollToProduct} className='btn secondary'>
              Conocé más
            </button>
          </div>
          <div className='store-images'>
            <img src={stores} alt='App stores' />
          </div>
        </div>

        <div className='hero-image-wrapper absolute inset-0 z-0'>
          <div
            className='hero-background absolute inset-0'
            style={{
              backgroundImage: `
          linear-gradient(to right, #d1d5db 1px, transparent 1px),
          linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
        `,
              backgroundSize: '32px 32px',
              WebkitMaskImage:
                'radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)',
              maskImage:
                'radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)',
            }}
          ></div>

          <img
            src={phoneLogo}
            alt='Phone with Orario app'
            className='hero-image'
          />
        </div>
        <div className='hero-image-text'>
          <p>Próximamente disponible</p>
        </div>
      </section>

      {/* Product Section */}
      <section className='product fade-in-up' ref={productSectionRef}>
        <div className='product-image'>
          <img src={womanHoldingPhone} alt='Person with headphones' />
        </div>
        <div className='product-info'>
          <h5>El futuro en reservas:</h5>
          <h2>Orario</h2>
          <p>
            <b>Orario</b> te conecta con los mejores locales y profesionales de
            tu ciudad. Agendá tus turnos en bares, peluquerías, spas y más, todo
            desde un solo lugar, fácil y rápido, sin registro y sin descargarte
            ninguna App.
          </p>
          <p>
            Sumá tu negocio a Orario y empezá a recibir reservas sin
            complicaciones. Gestión ágil, visibilidad y nuevos clientes en un
            solo sistema.
          </p>
          <div className='volver'>
            <button onClick={scrollToHero} className='btn secondary'>
              Volvé al início
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
