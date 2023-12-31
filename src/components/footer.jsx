import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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

      <swiper-container ref={swiperRef}>
        
          <Swiper navigation={true} modules={[Navigation]}>

            <swiper-wrapper >

            <SwiperSlide>
              <div className="card">
                <div className="d-flex">
                  <div className="img-container">
                    <img
                      style={{ height: 144, width: 144 }}
                      src="assets/tiago-bruno.jpeg"
                      className="card-img rounded-circle"
                      alt="Maykell Pereira"
                    />
                  </div>
                  <div style={{ width: 280, padding: 0 }} >
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">Tiago Bruno</h5>
                        <p className="card-text">
                        Engenheiro de Software, Google
                        </p>
                      <button 
                      type="button"
                       data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                         className="btn btn-outline-dark"
                          id="tiago-bruno"
                          onClick={
                            () => { setModalText("Tiago Bruno Silva dos Reis é natural de Patos de Minas e graduado em Engenharia Física pela UFSCar. Já no período da graduação, interessou-se pela área de tecnologia e obteve destaque em competições internacionais de programação, o que o levou a complementar sua formação cursando o mestrado em Ciência da Computação na Unicamp. Posteriormente, passou a trabalhar no Google, onde atua como engenheiro de software desde 2018.")}}
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
                      alt="Afonso Machado Coelho"
                    />
                  </div>
                  <div style={{ width: 280, padding: 0 }} className="">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">Afonso M. Coelho</h5>
                      <p className="card-text">
                      Gerente de RH e Segurança do Trabalho, Grupo Patense
                      </p>
                                            <button 
                      type="button"
                       data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                         className="btn btn-outline-dark"
                          id="afonso-coelho"
                          onClick={
                            () => { setModalText("Bacharel em Direito pelo UNIPAM no ano de 2007.Advogado, inscrito na OAB/MG sob o n. 113.244, atuante desde o ano de 2008, sócio e fundador do Escritório Machado e Martins em Patos de Minas – MG. Pós-graduado em Gestão de Políticas Públicas – Universidade Federal de Uberlândia – UFU finalizado em 2012. Pós-graduado em Advocacia Trabalhista e Previdenciária – Universidade de Santa Cruz do Sul UNISC finalizado em 2019. MBA Executivo em Direito  Gestão e Business Law Gestão de assuntos jurídicos em ambientes corporativos - Fundação Getúlio Vargas  FGV – finalizado em fevereiro de 2023. Membro da Comissão de Honorários Advocatícios da OAB – Subseção Patos de Minas gestão 2016/2018. Conselheiro eleito da Ordem dos Advogados do Brasil – Subseção Patos de Minas  gestão 2022/2024. Servidor Público e Gerente do Setor de Licitações da FHEMIG entre os anos de 2008 e 2013. Gerente Jurídico do Grupo Patense Indústria de Rações Patense, desde setembro de 2013 até dias atuais. Membro do Comitê de Recursos Humanos do Sindicato Nacional da Alimentação Animal desde o ano de 2018 até dias atuais. Gerente de RH e Segurança do Trabalho do Grupo Patense Indústria de Rações Patense, desde dezembro de 2022 até dias atuais.")}}
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
              <div className="card">
                <div className="d-flex">
                  <div className="img-container">
                    <img
                      style={{ height: 144, width: 144 }}
                      src="assets/p1.jpeg"
                      className="card-img rounded-circle"
                      alt="Dr. Mateus Avelar"
                    />
                  </div>
                  <div style={{ width: 280, padding: 0 }} className="">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">Dr. Mateus Avelar</h5>
                      <p className="card-text">
                      Defensor Público do Estado de Minas Gerais
                      </p>
                                            <button 
                      type="button"
                       data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                         className="btn btn-outline-dark"
                          id="mateus-avelar"
                          onClick={
                            () => { setModalText("Mateus Nascimento Avelar, Defensor Público do Estado de Minas Gerais, titular da Defensoria Pública na área de Saúde. Defensor Público desde 2015. Fui analista do Ministério Público de MG entre 2008 e 2015, além de Procurador do Município de Paracatu em 2008. Formado em Direito pela Universidade Federal de Uberlândia - UFU.")}}
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
