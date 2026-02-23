import { formatPrice } from '../../utils/formatPrice';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          🍕 Pizzería Mamma Mia
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <button className="btn btn-outline-light">🍕 Home</button>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <button className="btn btn-outline-light">🔓 Profile</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light">🔒 Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button className="btn btn-outline-light">🔐 Login</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light">🔐 Register</button>
                </li>
              </>
            )}
            <li className="nav-item">
              <button className="btn btn-outline-warning">
                🛒 Total: ${formatPrice(total)}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
