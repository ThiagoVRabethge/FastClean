import Link from "next/link";

const Nav = () => {
  return (
    <>
      <div className="container mt-2 mb-2">
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href="/">Sobre nós</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" href="/catalog/Catalog">Nossos serviços</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" href="/schedule/Schedule">Agendar</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;