import { useMediaQuery } from "react-responsive"

export function Apoio_e_Realizacao() {

  const isLessThan890 = useMediaQuery({
    query: '(max-width: 1280px)'
  })
  const isLessThan372 = useMediaQuery ({
    query: '(max-width: 372px'
  })

  return (
    <div className="apoio-realizacao-container">
    <div>
      <h3 className="pt-2 pb-2 titulo-patrocina fw-bold">Apoio</h3>
      <div className="ps-2 pe-2 gap-4 apoio-realizacao-img-container">
        <img 
        src={!isLessThan372 ? "assets/sebrae-3.png" : "assets/sebrae-2.png" }
        alt="SEBRAE Logo" 
        />
        <img

          src={!isLessThan890 ? "assets/fiemg-2.png" : "assets/fiemg-4.png"}
          alt="FIEMG Logo"

        />
        <img

          src="assets/BERNOULLI 230X49.png"
          alt="FIEMG Logo"

        />
      </div>
    </div>

    <div>
      <h3 className="pt-2 pb-2 titulo-patrocina fw-bold">Realização</h3>
      <div className="ps-2 pe-2 apoio-realizacao-img-container">
        <img
          
          src="assets/finom-2.png"
          alt="Finom"
          
        />
        <img
          src="assets/colegio-branco-2.png"
          alt="Colégio Fonseca Rodrigues"
        />
      </div>
    </div>
  </div>
  )
}