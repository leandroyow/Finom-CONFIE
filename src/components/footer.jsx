export function Footer() {
  return ( 

    <>
      <div className="d-flex justify-content-center pt-5">
        <div className="line text-center"> </div>
      </div>
    <div className="patrocinadores">
      <h6 className="text-center fs-4 pt-3 fw-bold">Patrocinadores</h6>
      <div className="d-flex justify-content-around">
        <img src="./src/assets/sicoob.png" alt="Sicoob" />
        <img src="./src/assets/fiemg.webp" alt="FIEMG" />
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
  src="/src/assets/sebrae.webp"
   alt="SEBRAE Logo"
   style={{height: 60}}
    />
  <img
    style={{ height: 60, width: 110 }}
    src="/src/assets/fiemg.webp"
    alt="FIEMG Logo"
  />
</div>
<div>
      <h3 className="fw-bold text-white fs-6" id="texto-realizacao">Realização</h3>
      <div className="apoio-realizacao-img-container pb-1">
        <img
          style={{ height: 60, width: 160 }}
          src="/src/assets/finom-branco.png"
          alt="Finom Logo"
          id="logo-finom"
        />
        <img
          style={{ height: 80, width: 140 }}
          src="/src/assets/fonseca-branco.png"
          alt="Colégio Fonseca Rodrigues"
          id="logo-fonseca"
        />
      </div>
    </div>

    </div>

  </footer>
    </>
  )
}