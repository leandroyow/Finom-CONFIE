import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="app-container">
      <nav className="nav">
        <img
          className="logo ms-3"
          src=".\src\assets\logo.png"
          alt="CONFIE LOGO"
        />
      </nav>

      <div className="">
        <img
          className="img-fluid"
          src=".\src\assets\bannerMain.jpg"
          alt="Congresso CONFIE Banner"
        />
      </div>

      <main>
        <div className="apoio-realizacao-container">
          <div>
            <h3 className="p-3 titulo-patrocina">Apoio</h3>
            <div className="p-3 apoio-realizacao-img-container">
              <img src=".\src\assets\sebrae.webp" alt="SEBRAE Logo" />
              <img
                style={{ height: 75, width: 130 }}
                src=".\src\assets\fiemg.webp"
                alt="FIEMG Logo"
              />
            </div>
          </div>

          <div>
            <h3 className="p-3 titulo-patrocina">Realização</h3>
            <div className="p-3 apoio-realizacao-img-container">
              <img
                style={{ height: 75, width: 190 }}
                src=".\src\assets\finom-branco.png"
                alt="Fonseca Rodrigues Logo"
              />
              <img
                style={{ height: 80, width: 140 }}
                src=".\src\assets\fonseca-branco.png"
                alt="FIEMG Logo"
              />
            </div>
          </div>
        </div>

        <div className="programacao-container m-5 rounded-2">
          <h2 className="text-center">Programação</h2>

          <div id="carousel-programacao" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src=".\src\assets\dia-1.jpg"
                  className="d-block w-100"
                  alt="Programação Dia 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src=".\src\assets\dia-2.jpg"
                  className="d-block w-100"
                  alt="Programação Dia 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src=".\src\assets\dia-3.jpg"
                  className="d-block w-100"
                  alt="Programação Dia 3"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carousel-programacao"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carousel-programacao"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="btn-container text-center">
          <a
            className="btn btn btn-outline-light text-center btn-inscricao"
            style={{ width: 300, height: 40 }}
            href="https://www.sympla.com.br/confie---congresso-finom-de-inovacao-e-empreendedorismo__2183047"
            role="button"
          >
            Garanta sua vaga
          </a>{" "}
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

{
  /* <div className="card mb-3" style={{ maxWidth: 320, height:120 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src=".\src\assets\sebrae.webp"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider carit longerasdasdsa dsadsa.</p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>  */
}
