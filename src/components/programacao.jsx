
export function Programacao() {
  return (
      <div id="programacao" className="programacao-container m-5 rounded-2">
          <h2 className="text-center">Programação</h2>

          <div id="carousel-programacao" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/src/assets/dia-1.jpg"
                  className="d-block w-100"
                  alt="Programação Dia 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/src/assets/dia-2.jpg"
                  className="d-block w-100"
                  alt="Programação Dia 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/src/assets/dia-3.jpg"
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
  )
}