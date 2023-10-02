import { useMediaQuery } from "react-responsive"

export function Navbar() {

  const isLessThan581 = useMediaQuery({
    query: '(min-width: 581px)'
  })

  if(isLessThan581) {

    return (
      <nav className="d-flex justify-content-between">
      <img
        className="logo ms-3"
        src="./src/assets/logo.png"
        alt="CONFIE LOGO"
      />
  
      <div className="d-flex">
        <a className="fs-8 fw-medium nav-link" href="#programacao">Programação</a>
        <a className="fs-8 fw-medium nav-link" href="#contato">Contato</a>
        <a className="fs-8 fw-medium nav-link" href="#inscricao">Inscreva-se</a>
      </div>
    </nav>
    )
  } else {
    return (
        <nav className="d-flex justify-content-between">
        <img
          className="logo ms-3"
          src="./src/assets/logo.png"
          alt="CONFIE LOGO"
        />
    

  <i 
  className="bi bi-list me-3 fs-1"
  id="menu-mobile"
  data-bs-toggle="offcanvas" 
  data-bs-target="#offcanvasWithBothOptions" 
  aria-controls="offcanvasWithBothOptions"
  ></i>
 

<div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title ms-3 fs-1" id="offcanvasWithBothOptionsLabel">
      Menu
    </h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
  <div className="d-flex flex-column">
        <a className="fs-5 ms-3 fw-medium nav-link" href="#programacao">Programação</a>
        <a className="fs-5 ms-3 fw-medium nav-link" href="#contato">Contato</a>
        <a className="fs-5 ms-3 fw-medium nav-link" href="#inscricao">Inscreva-se</a>
      </div>
  </div>
</div>


      </nav>
    )
  }
}