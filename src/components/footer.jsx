import { useMediaQuery } from "react-responsive";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export function Footer() {
  const isLessThan637 = useMediaQuery({ query: "(max-width: 637px)" });
  const isLessThan436 = useMediaQuery({ query: "(max-width: 436px)" });

  const swiperRef = useRef(null);

  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  
  useEffect(() => {

    const swiperContainer = swiperRef.current;
    Object.assignswiperContainer;
    swiperContainer.initialize();
    
    
  }, []);

  return (
    <>
      <h5 className="titulo-palestrantes fs-4 text-center mt-5 mb-4">
        Palestrantes
      </h5>
      <div>

      <swiper-container ref={swiperRef}  >
        
          <Swiper 
          modules={[Navigation]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
         onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
         }}>

            <swiper-wrapper>


            <SwiperSlide>
              <div className="card">
                <div className="d-flex">
                  <div className="img-container">
                    <img
                      style={{ height: 144, width: 144 }}
                      src="assets/palestrante (1).jpeg"
                      className="card-img rounded-circle"
                      alt="Maykell Pereira"
                    />
                  </div>
                  <div style={{ width: 280, padding: 0 }} className="">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">Maykell Pereira</h5>
                      <div className="card-text-scroll">
                        <p className="card-text">
                          Diretor de Operações de TI. Auma Tecnologia
                        </p>
                      </div>
                      <button className="btn btn-outline-dark">
                        Conheça-me
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="d-flex">
                  <div className="img-container">
                    <img
                      style={{ height: 144, width: 144 }}
                      src="assets/palestrante (2).jpeg"
                      className="card-img rounded-circle"
                      alt="Carlos Simão"
                    />
                  </div>
                  <div style={{ width: 280, padding: 0 }} className="">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">Carlos Simão</h5>
                      <p className="card-text">
                      Team Leader na Auma Tecnologia
                      </p>
                      <button className="btn btn-outline-dark">
                        Conheça-me
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="d-flex">
                  <div className="img-container">
                    <img
                      style={{ height: 144, width: 144 }}
                      src="assets/palestrante (3).jpeg"
                      className="card-img rounded-circle"
                      alt="Rayanne Bárbara Pereira"
                    />
                  </div>
                  <div style={{ width: 280, padding: 0 }} className="">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">Rayanne Pereira</h5>
                      <p className="card-text">
                        Coordenadora da Área de Assessoria Estratégica e
                        Soluções Judiciais Cíveis e Trabalhistas, escritório
                        Mírian Gontijo Advogados
                      </p>
                      <button className="btn btn-outline-dark">
                        Conheça-me
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="d-flex">
                  <div className="img-container">
                    <img
                      style={{ height: 144, width: 144 }}
                      src="assets/palestrante (4).jpeg"
                      className="card-img rounded-circle"
                      alt="Igor Tadeu Fernandes Rodrigues"
                    />
                  </div>
                  <div style={{ width: 280, padding: 0 }} className="">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">Igor Rodrigues</h5>
                      <p className="card-text">
                        Analista do Ministério Público do Estado de Minas Gerais
                      </p>
                      <button className="btn btn-outline-dark">
                        Conheça-me
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="d-flex">
                  <div className="img-container">
                    <img
                      style={{ height: 144, width: 144 }}
                      src="assets/palestrante (5).jpeg"
                      className="card-img rounded-circle"
                      alt="Adriano Chaves Macedo"
                    />
                  </div>
                  <div style={{ width: 280, padding: 0 }} className="">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">Adriano Macedo</h5>
                      <p className="card-text">
                        Analista de Planejamento e Controle de Manutenção, KWS
                        Group
                      </p>
                      <button className="btn btn-outline-dark">
                        Conheça-me
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="d-flex">
                  <div className="img-container">
                    <img
                      style={{ height: 144, width: 144 }}
                      src="assets/palestrante (8).jpeg"
                      className="card-img rounded-circle"
                      alt="Nívia Mendes Gontijo"
                    />
                  </div>
                  <div style={{ width: 280, padding: 0 }} className="">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">Nívia Mendes Gontijo</h5>
                      <p className="card-text">
                      Escrivã Judicial, TJMG
                      </p>
                      <button className="btn btn-outline-dark">
                        Conheça-me
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="d-flex">
                  <div className="img-container">
                    <img
                      style={{ height: 144, width: 144 }}
                      src="assets/palestrante (7).jpeg"
                      className="card-img rounded-circle"
                      alt="Willian Ferreira"
                    />
                  </div>
                  <div style={{ width: 280, padding: 0 }} className="">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">Willian Ferreira</h5>
                      <p className="card-text">
                        Assessor Pedagógico, Grupo Bernoulli de Educação
                      </p>
                      <button className="btn btn-outline-dark">
                        Conheça-me
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="d-flex">
                  <div className="img-container">
                    <img
                      style={{ height: 144, width: 144 }}
                      src="assets/palestrante (9).jpeg"
                      className="card-img rounded-circle"
                      alt="Andressa Arielly"
                    />
                  </div>
                  <div style={{ width: 280, padding: 0 }} className="">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">Andressa Arielly</h5>
                      <p className="card-text">
                      Especialista em planejamento de carreira
                      </p>
                      <button className="btn btn-outline-dark">
                        Conheça-me
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="d-flex">
                  <div className="img-container">
                    <img
                      style={{ height: 144, width: 144 }}
                      src="assets/palestrante (10).jpeg"
                      className="card-img rounded-circle"
                      alt="Weber Ferreira"
                    />
                  </div>
                  <div style={{ width: 280, padding: 0 }} className="">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">Weber Ferreira</h5>
                      <p className="card-text">
                      CEO, Construtora Ferreira
                      </p>
                      <button className="btn btn-outline-dark">
                        Conheça-me
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            </swiper-wrapper>
          </Swiper >
         
        </swiper-container>
        <div className="d-flex justify-content-center gap-3 pt-3">
          <i className="fa-solid fa-circle-arrow-left"
             role="button"
             ref={navigationPrevRef} 
             ></i>
          <i className="fa-solid fa-circle-arrow-right"
             role="button"
             ref={navigationNextRef} ></i>
         </div>
      </div>

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
