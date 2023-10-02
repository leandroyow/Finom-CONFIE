export function Apoio_e_Realizacao() {
  return (
    <div className="apoio-realizacao-container">
    <div>
      <h3 className="p-3 titulo-patrocina fw-bold">Apoio</h3>
      <div className="p-3 apoio-realizacao-img-container">
        <img 
        src="/assets/sebrae-logo-0.png" 
        alt="SEBRAE Logo" 
        id="sebrae-logo-cima"
        style={{height: 150, width: 220}}
        />
        <img
          style={{ height: 150, width: 220 }}
          src="/assets/fiemg.webp"
          alt="FIEMG Logo"
          id="fiemg-logo-cima"
        />
      </div>
    </div>

    <div>
      <h3 className="p-3 titulo-patrocina fw-bold">Realização</h3>
      <div className="p-3 apoio-realizacao-img-container">
        <img
          style={{ height: 75, width: 280 }}
          src="/assets/finom-branco.png"
          alt="Finom"
          id="finom-logo-cima"
        />
        <img
          style={{ height: 150, width: 250 }}
          src="/assets/fonseca-branco.png"
          alt="Colégio Fonseca Rodrigues"
          id="colegio-logo-cima"
        />
      </div>
    </div>
  </div>
  )
}