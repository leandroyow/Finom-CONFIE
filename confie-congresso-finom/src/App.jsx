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
                style={{ height: 75, width: 150 }}
                src=".\src\assets\finom-branco.png"
                alt="Fonseca Rodrigues Logo"
              />
              <img
                style={{ height: 75, width: 130 }}
                src=".\src\assets\fonseca-branco.png"
                alt="FIEMG Logo"
              />
            </div>
          </div>


        </div>

        <div className="programacao-container m-3">
          <h2 className="text-center">Programação do Evento</h2>
          <div className="">
            <img className="img-fluid" src=".\src\assets\dia-1.jpg" alt="" />
          </div>
        </div>
         
      </main>

      <footer>Finom 2023</footer>
    </div>
  );
}

{/* <div className="card mb-3" style={{ maxWidth: 320, height:120 }}>
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
            </div>  */}