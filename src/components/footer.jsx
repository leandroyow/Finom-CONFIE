import { useMediaQuery } from "react-responsive";
import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';

export function Footer() {
  const isLessThan637 = useMediaQuery({ query: "(max-width: 637px)" });
  const isLessThan436 = useMediaQuery({ query: "(max-width: 436px)" });

  const swiperRef = useRef(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      slidesPerView: 4,
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
    <>
      <div
        style={{ marginBottom: "1rem" }}
        className="line text-center mt-5"
      ></div>

      <swiper-container init="false" ref={swiperRef}>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 1</swiper-slide>
      </swiper-container>

      <div style={{ marginTop: "1rem" }} className="line text-center"></div>

      <div className="patrocinadores gap-3">
        <h6 className="text-center fs-4 pt-3 fw-bold">Patrocinadores</h6>
        <div className="d-flex justify-content-around gap-3">
          <img src="assets/sicoob.png" alt="Sicoob" />
          <img
            src={!isLessThan637 ? "assets/fiemg-2.png" : "assets/fiemg-1.webp"}
            alt="FIEMG"
          />
        </div>
      </div>

      <footer id="contato" className="d-flex w-100 justify-content-around">
        <div style={{ alignItems: "baseline" }} className="d-flex flex-column">
          <h5 className="fw-bold pb-3">Entre em contato</h5>

          <div className="d-flex gap-2 contact-container">
            <i className="bi bi-telephone text-white"></i>
            <p className="phone text-white">(34) 3823-3933</p>
          </div>

          <div
            className="d-flex gap-2 align-items-center"
            style={{ height: 30 }}
          >
            <i className="fa-regular fa-envelope"></i>
            <p className="email">congressoconfie2023@finom.edu.br</p>
          </div>
        </div>

        <div
          className="d-flex flex-column justify-content-start"
          id="texto-apoio"
        >
          <h3 className="fw-bold text-white fs-6 mb-3">Apoio</h3>
          <div className="apoio-realizacao-img-container mb-5">
            <img
              src={
                !isLessThan436 ? "assets/sebrae-3.png" : "assets/sebrae-2.png"
              }
              alt="SEBRAE Logo"
            />
            <img src="assets/fiemg-4.png" alt="FIEMG Logo" />
          </div>
          <div className="pb-5">
            <h3 className="fw-bold text-white fs-6" id="texto-realizacao">
              Realização
            </h3>
            <div className="apoio-realizacao-img-container pb-1">
              <img src="assets/finom-2.png" alt="Finom Logo" />
              <img
                src="assets/colegio-branco-2.png"
                alt="Colégio Fonseca Rodrigues"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
