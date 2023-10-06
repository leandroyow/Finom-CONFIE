import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { Programacao } from "./components/programacao";
import { Apoio_e_Realizacao } from "./components/apoio-e-realizacao";
import { useMediaQuery } from "react-responsive"

export default function App() {

  const isLessThan642 = useMediaQuery({query: '(max-width: 642px)'})

  return (
    <div className="app-container">
      <Navbar/>
      <div className="mb-5 main-banner-container text-center">
        <img
          className="img-fluid"
          src={!isLessThan642 ? "assets/bannerMain.jpg"
        : "assets/bannerMobile-9.jpg"}
          alt="Congresso CONFIE Banner"
        />
      </div>

      <main>

        <Apoio_e_Realizacao/>
        <Programacao />

        <div className="btn-container text-center" id="inscricao">
          <a
            className="btn btn btn-outline-light text-center"
            style={{ width: 300, height: 40 }}
            href="https://www.sympla.com.br/confie---congresso-finom-de-inovacao-e-empreendedorismo__2183047"
            role="button"
          >
            Garanta sua vaga
          </a>
        </div>
      </main>
      <Footer/>

    </div>
  );
}

