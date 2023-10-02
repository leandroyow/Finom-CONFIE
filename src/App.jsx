import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { Programacao } from "./components/programacao";
import { Apoio_e_Realizacao } from "./components/apoio-e-realizacao";

export default function App() {
  return (
    <div className="app-container">
      <Navbar/>
      <div>
        <img
          className="img-fluid"
          src="./src/assets/bannerMain.jpg"
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

