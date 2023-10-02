export function Footer() {
  return ( 

    <>
      <div className="d-flex justify-content-center pt-5">
        <div className="line text-center"> </div>
      </div>
    <div className="patrocinadores gap-3">
      <h6 className="text-center fs-4 pt-3 fw-bold">Patrocinadores</h6>
      <div className="d-flex justify-content-around gap-3">
        <img src="/assets/sicoob.png" alt="Sicoob" />
        <img 
        src="/assets/fiemg.webp" 
        alt="FIEMG"
        style={{height: 110}}
        />
      </div>
    </div>

    <footer id="contato" className="d-flex w-100 justify-content-around">

    <div style={{alignItems: "baseline"}} className="d-flex flex-column">
      <h5 className="fw-bold pb-3">Entre em contato</h5>

      <div className="d-flex gap-2 contact-container">
      <i className="bi bi-telephone text-white"></i>
      <p className="phone text-white">(34) 92919459</p>
      </div>

      <div className="d-flex gap-2 align-items-center" style={{height: 30}}>
      <i className="fa-regular fa-envelope"></i>
      <p className="email">congressoconfie2023@finom.edu.br</p>
      </div>


    </div>

    <div className="d-flex flex-column justify-content-start" id="texto-apoio">
    <h3 className="fw-bold text-white fs-6 mb-3">Apoio</h3>
    <div className="apoio-realizacao-img-container mb-5">
  <img 
  src="/assets/sebrae-logo-0.png"
   alt="SEBRAE Logo"
   style={{height: 85, width: 180}}
    />
  <img
    style={{ height: 85, width: 180 }}
    src="/assets/fiemg.webp"
    alt="FIEMG Logo"
  />
</div>
<div className="pb-5">
      <h3 className="fw-bold text-white fs-6" id="texto-realizacao">Realização</h3>
      <div className="apoio-realizacao-img-container pb-1">
        <img
          style={{ height: 60, width: 160 }}
          src="/assets/finom-branco.png"
          alt="Finom Logo"
          id="logo-finom-footer"
        />
        <img
          style={{ height: 150, width: 140 }}
          src="/assets/fonseca-branco.png"
          alt="Colégio Fonseca Rodrigues"
          id="logo-fonseca-footer"
        />
      </div>
    </div>

    </div>

  </footer>
    </>
  )
}