export function Navbar() {
  return (
    <nav className="d-flex justify-content-between">
    <img
      className="logo ms-3"
      src=".\src\assets\logo.png"
      alt="CONFIE LOGO"
    />

    <div className="d-flex">
      <a className="fs-8 fw-medium nav-link" href="#programacao">Programação</a>
      <a className="fs-8 fw-medium nav-link" href="#contato">Contato</a>
      <a className="fs-8 fw-medium nav-link" href="#inscricao">Inscreva-se</a>
    </div>
  </nav>
  )
}