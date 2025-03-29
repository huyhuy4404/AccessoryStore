function Header() {
  return (
    <header className="py-2">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-8 col-md-3">
            <a href="/">
              <img
                src="/images/TidyHomelogo.png"
                alt="Logo"
                className="logo-header"
              />
            </a>
          </div>
          <div className="col-4 col-md-9 text-end">
            <nav className="navbar navbar-expand-md navbar-light">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item page-header">
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  {/* Dropdown Category */}
                  <li className="nav-item dropdown page-header">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onClick={(e) => e.preventDefault()}
                    >
                      Category
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a
                          className="dropdown-item"
                          href="/categories/decoration"
                        >
                          Decoration
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/categories/furniture"
                        >
                          Furniture
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/categories/kitchen">
                          Kitchenware
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item page-header">
                    <a className="nav-link" href="/about">
                      About
                    </a>
                  </li>
                  <li className="nav-item page-header">
                    <a className="nav-link" href="/contact">
                      Contact
                    </a>
                  </li>
                  {/* Dropdown Account */}
                  <li className="nav-item dropdown page-header">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="accountDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onClick={(e) => e.preventDefault()}
                    >
                      Account
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="accountDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="/login">
                          Login
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/register">
                          Register
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
