import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

export function Footer() {

  const [modalText, setModalText] = useState("");

  const isLessThan637 = useMediaQuery({ query: "(max-width: 637px)" });
  const isLessThan436 = useMediaQuery({ query: "(max-width: 436px)" });

  const swiperRef = useRef(null);
  
  useEffect(() => {
    
    const swiperContainer = swiperRef.current;
    Object.assignswiperContainer;
    swiperContainer.initialize();   

  }, []);

  return (
    <>

<div className="modal fade" id="staticBackdrop"  data-bs-keyboard="true" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
         <p>{modalText}</p>
      </div>
    </div>
  </div>
</div>

      <h5 className="titulo-palestrantes
       fs-4 text-center mt-5 mb-4">Palestrantes</h5>
      <div>

      <swiper-container ref={swiperRef}  >
        
          <Swiper>

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
                  <div style={{ width: 280, padding: 0 }} >
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">Maykell Pereira</h5>
                        <p className="card-text">
                          Diretor de Operações de TI. Auma Tecnologia
                        </p>
                      <button 
                      type="button"
                       data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                         className="btn btn-outline-dark"
                          id="maykell-pereira"
                          onClick={
                            () => { setModalText("Maykell é um profissional com uma sólida trajetória na área de Tecnologia da Informação. Sua jornada começou como Estagiário no Laboratório de Informática da UNIPAM e progrediu ao longo dos anos, passando por cargos de Analista de Suporte Técnico e, subsequentemente, Analista de Sistemas. Atualmente, ele desempenha um papel crucial como Diretor de Operações de TI na Auma Tecnologia, onde lidera a entrega de soluções para o agronegócio. Com mais de 7 anos de experiência no Grupo Auma, Maykell demonstra habilidades sólidas em implementação de ERP, gestão de projetos, liderança técnica e soluções agro, tornando-o um ativo valioso na indústria de tecnologia.")}}
                          >
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
                                            <button 
                      type="button"
                       data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                         className="btn btn-outline-dark"
                          id="carlos-simao"
                          onClick={
                            () => { setModalText("Carlos Simão é um Team Leader com mais de 4 anos de experiência na Auma Tecnologia. Ele é especializado em liderar equipes de desenvolvimento e gerenciar projetos de software. Destaca-se por suas habilidades sólidas no desenvolvimento de aplicações para SAP Business One, utilizando a plataforma .NET. Possuí bacharelado em Sistemas de Informação pelo Centro Universitário de Patos de Minas - UNIPAM. Ele também possui certificações importantes, incluindo Scrum Fundamentals Certified (SFC) e Scrum Master Certified (SMC), que atestam sua experiência em metodologias ágeis e práticas de gestão de projetos.")}}
                          >
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
                                            <button 
                      type="button"
                       data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                         className="btn btn-outline-dark"
                          id="rayanne-pereira"
                          onClick={
                            () => { setModalText("Coordenadora da Área de Assessoria Estratégica e Soluções Judiciais Cíveis e Trabalhistas do escritório Mírian Gontijo Advogados. Rayanne é graduada em Direito pela Universidade de Patos de Minas – UNIPAM, inscrita na OAB/MG 153.308, e pós-graduada em Direito Processual Civil e em Direito das Famílias e Sucessões, pelo Centro Educacional Damásio de Jesus. Com quase dez anos de experiência na advocacia contenciosa e preventiva, com visão estratégica cível, trabalhista e empresarial, Rayanne possui ampla experiência  em jurídico corporativo, atuando, atualmente, no assessoramento preventivo e consultivo de empresas privadas e cooperativas agroindustriais e de crédito.")}}
                          >
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
                                            <button 
                      type="button"
                       data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                         className="btn btn-outline-dark"
                          id="igor-rodrigues"
                          onClick={
                            () => { setModalText("Bacharel em Direito Centro no Universitário FIPMOC/UNIFIPMOC. Especialista em Direito Econômico e Empresarial na Universidade Estadual de Montes Claros - Unimontes. Especialista em Direito Eleitoral na Universidade Cândido Mendes. Mestrando em Instituições Sociais, Direito e Democracia na Universidade FUMEC. Analista do Ministério Público do Estado de Minas Gerais")}}
                          >
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
                                            <button 
                      type="button"
                       data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                         className="btn btn-outline-dark"
                          id="adriano-macedo"
                          onClick={
                            () => { setModalText("Graduado em Engenharia Mecânica pela Faculdade Finom de Patos de Minas - MG. Engenheiro Mecânico com sólida experiência em Planejamento, Programação e Controle de Manutenção, bem como gestão de equipes nas áreas Elétrica, Mecânica e Utilidades. Especializado em start-up de novos ativos e ampla expertise em Controle e Abastecimento da Cadeia de Suprimentos e Almoxarifado. Com vasto conhecimento em Projetos e gerenciamento, destaca-se por liderar equipes, desenvolver pessoas e otimizar Processos de Manutenção.")}}
                          >
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
                      src="assets/palestrante (6).jpeg"
                      className="card-img rounded-circle"
                      alt="Adriano Chaves Macedo"
                    />
                  </div>
                  <div style={{ width: 280, padding: 0 }} className="">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">Higgor Olipe</h5>
                      <p className="card-text">
                      Gerente de Automação e Digital, Grupo Setta
                      </p>
                                            <button 
                      type="button"
                       data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                         className="btn btn-outline-dark"
                          id="higgor-olipe"
                          onClick={
                            () => { setModalText("Higgor é graduado em Engenharia Elétrica e Eletrônica pela Universidade Federal de Uberlândia (UFU), e pós-graduado em Gestão Empresarial pela Fundação Getúlio Vargas. Com uma carreira desenvolvida na área de Gerenciamento de Projetos industriais, desenvolveu atividades na área atuando em empresas dos segmentos de Energia, Fabricação de Equipamentos do setor Elétrico e outras.")}}
                          >
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
                                            <button 
                      type="button"
                       data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                         className="btn btn-outline-dark"
                          id="nivia-gontijo"
                          onClick={
                            () => { setModalText("Pós-graduada em Direito pelo Centro Universitário de Patos de Minas (UNIPAM), Nívia é Escrivã Judicial no Tribunal Judiciário de Minas Gerais e Professora no curso de Direito na Faculdade Finom de Patos de Minas.")}}
                          >
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
                                            <button 
                      type="button"
                       data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                         className="btn btn-outline-dark"
                          id="willian-ferreira"
                          onClick={
                            () => { setModalText("Formação acadêmica sólida, com Mestrado em Educação Tecnológica e mais de 20 anos de experiência no ensino de Ciências e Biologia, em ambientes formais e informais das esferas pública e privada. Conhecimento amplo de informática e outras tecnologias aplicadas ao ensino, tais como robótica educacional, web design e produção de documentários. Elaboração, gerência e execução de projetos temáticos multi e transdisciplinares e oficinas pedagógicas. Pesquisas recentes voltadas para a construção do pensamento científico, natureza da ciência e instrumentação para o ensino de Ciências e Biologia.")}}
                          >
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
                                            <button 
                      type="button"
                       data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                         className="btn btn-outline-dark"
                          id="andressa-arielly"
                          onClick={
                            () => { setModalText("Psicóloga, especialista em Gestão de Pessoas, Analista comportamental, Executive coaching, Mestre em Educação. Sete anos de experiência em consultoria, desenvolvendo pessoas, líderes e quem busca alta performance. Palestras, treinamentos e workshop em gestão, liderança, performance e planejamento. Uma entusiasta do mundo de empreendedorismo e inovação.")}}
                          >
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
                      src="assets/weber.jpeg"
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
                                            <button 
                      type="button"
                       data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                         className="btn btn-outline-dark"
                         id="weber-ferreira"
                         
                          onClick={
                            () => { setModalText("Weber Ferreira 38 anos, co-fundador e sócio da Ferreira eng inteligente! Incorporadora e construtora. Começou com uma construção de uma casa de 85m em 2009 e em 2023 chega a mais de 10mil m2 entregues! Professor de química, motorista, vendedor, empreendedor, operário da construção civil,  idealizador, aprendiz na área de gestão eficaz!")}}
                          >
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
                      src="assets/vinicius.jpeg"
                      className="card-img rounded-circle"
                      alt="Vinicius Magalhães"
                    />
                  </div>
                  <div style={{ width: 280, padding: 0 }} className="">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">Vinicius Magalhães</h5>
                      <p className="card-text">
                      Engenheiro de Projetos Fairtek
                      </p>
                                            <button 
                      type="button"
                       data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                         className="btn btn-outline-dark"
                          id="vinicius-magalhaes"
                          onClick={
                            () => { setModalText("Engenheiro Eletricista formado pela FPM em 2016, com formação técnica em eletrônica pelo Senai em 2004. Atuo no setor de elétrica e eletrônica industrial desde 2005, acumulando experiência em áreas como instrumentação industrial, indústria alimentícia, fábrica de ração animal e fabricação de equipamentos Agroindustriais para produção de vapor e secagem de grãos. Atualmente, na Fairtek, onde trabalho no desenvolvimento de produtos que abrange metalurgia, transformação plástica e eletrônica aplicada, focado em criar oportunidades para o setor agro nacional.")}}
                          >
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
                      src="assets/jose.jpeg"
                      className="card-img rounded-circle"
                      alt="José Machado"
                    />
                  </div>
                  <div style={{ width: 280, padding: 0 }} className="">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">José Machado</h5>
                      <p className="card-text">
                      Diretor de Operações Fairtek
                      </p>
                                            <button 
                      type="button"
                       data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                         className="btn btn-outline-dark"
                          id="jose-machado"
                          onClick={
                            () => { setModalText("Administrador de Empresas, formado pela UNIPAM em 2009, e Técnico em Agropecuária, formado em 1994 pela Escola Agrícola Afonso Queiroz. Atua no setor de suinocultura desde 1995, tendo experiência em todas as fases de produção como gerente de múltiplas granjas de suínos e desenvolvimento de projetos de suinocultura no período de 2010 a 2017 no Brasil e América do Sul. Coo fundador da Fairtek Sistema Inteligente SA no dia 04/01/2018 na cidade de Patos de Minas MG, atualmente conta com 22 colaboradores direto e mais 45 indiretos.")}}
                          >
                        Conheça-me
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
                            



            <SwiperSlide>
              <div  style={{color:"white !important", backgroundColor:"white !important", display:"none"}} className="card">
                <div  className="d-flex">
                  <div  className="img-container">
                    <img

                      style={{ height: 144, width: 144, color:"white !important", backgroundColor:"white !important" }}
                      src=""
                      className="card-img rounded-circle"
                      alt="Weber Ferreira"
                    />
                  </div>
                  <div style={{ width: 280, padding: 0, color:"white !important", backgroundColor:"white !important" }} className="">
                    <div  className="card-body d-flex flex-column justify-content-between">
                      <h5  ></h5>
                      <p  className="card-text">

                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            </swiper-wrapper>
          </Swiper >
         
        </swiper-container>
      </div>

      <div className="patrocinadores gap-3">
        <h6 className="text-center fs-4 pt-3 fw-bold">Patrocinadores</h6>
        <div className="d-flex justify-content-around gap-3">
          <img 
          src={isLessThan637 ?"assets/sicoob-dwarf.png" : "assets/sicoob-big.png"} 
          alt="Sicoob" />
          <img
            id="fiemg-img"
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
            className="d-flex gap-2 btn-container-swiper align-items-center"
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
            <img src="assets/BERNOULLI 230X49.png" alt="FIEMG Logo"/>
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
