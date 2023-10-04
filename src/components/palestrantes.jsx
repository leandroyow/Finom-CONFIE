import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';

export default function App() {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      slidesPerView: 3,
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
      },
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, []);

  return (
    <swiper-container init="false" ref={swiperRef}>
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 1</swiper-slide>
    </swiper-container>
  );
}

{/* <div className="container">
      
<div className="card">
    <div className="d-flex">
        <div style={{padding: 0, margin: 0}} className="">
            <img style={{height:166,width:166}} src="assets/palestrante (1).jpeg" className="card-img rounded-circle" alt="Imagem Redonda"/>
        </div>
        <div style={{width: 300, padding: 0}} className="">
            <div  className="card-body d-flex flex-column justify-content-between">
                <h5  className="card-title">Maykell Pereira</h5>
                <p className="card-text">Diretor de Operações de TI, na Auma Tecnologia</p>
            </div>
        </div>
    </div>
</div>
</div> */}