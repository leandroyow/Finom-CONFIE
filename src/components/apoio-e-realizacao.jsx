export function Apoio_e_Realizacao() {
  return (
    <div className="apoio-realizacao-container">
    <div>
      <h3 className="p-3 titulo-patrocina fw-bold">Apoio</h3>
      <div className="p-3 apoio-realizacao-img-container">
        <img src="./src/assets/sebrae.webp" alt="SEBRAE Logo" />
        <img
          style={{ height: 75, width: 130 }}
          src="src\assets\fiemg.webp"
          alt="FIEMG Logo"
        />
      </div>
    </div>

    <div>
      <h3 className="p-3 titulo-patrocina fw-bold">Realização</h3>
      <div className="p-3 apoio-realizacao-img-container">
        <img
          style={{ height: 75, width: 190 }}
          src="./src/assets/finom-branco.png"
          alt="Finom"
          id="finom-logo-cima"
        />
        <img
          style={{ height: 80, width: 140 }}
          src="./src/assets/fonseca-branco.png"
          alt="Colégio Fonseca Rodrigues"
          id="colegio-logo-cima"
        />
      </div>
    </div>
  </div>
  )
}