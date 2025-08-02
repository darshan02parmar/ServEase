import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/', key: 'home' },
  { name: 'Services', path: '/services', key: 'services' },
  { name: 'About', path: '/about', key: 'about' },
  { name: 'Countries', path: '/countries', key: 'countries' },
  { name: 'Contact us', path: '/contact', key: 'contact' },
];

function Header() {
  const [active, setActive] = useState('home');
  const [showLogout, setShowLogout] = useState(false);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("mydata")));
  const avatarRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const found = navLinks.find(link => link.path === location.pathname);
    setActive(found ? found.key : '');
    setUser(JSON.parse(localStorage.getItem("mydata")));
  }, [location]);

  useEffect(() => {
    const cb = () => setUser(JSON.parse(localStorage.getItem("mydata")));
    window.addEventListener('storage', cb);
    return () => window.removeEventListener('storage', cb);
  }, []);

  useEffect(() => {
    function handle(event) {
      if (avatarRef.current && !avatarRef.current.contains(event.target)) {
        setShowLogout(false);
      }
    }
    if(showLogout) document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [showLogout]);

  function handleLogout(e) {
    e.stopPropagation();
    localStorage.removeItem("mydata");
    setUser(null);
    setShowLogout(false);
    navigate('/');
  }

  return (
    <header className="main-header">
      <div className="main-logo">
        <Link to="/" className="navbar-brand fw-bold text-brand" onClick={() => setActive('home')}>
        ServEase
        </Link>
      </div>
      <nav className="main-nav">
        <ul>
          {navLinks.map(link => (
            <li key={link.key} className={active === link.key ? 'active' : ''}>
              <Link to={link.path} onClick={() => setActive(link.key)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="main-user">
        {user ? (
          <div ref={avatarRef} className="user-avatar-wrap">
            <div
              className="user-avatar avatar-anim"
              tabIndex={0}
              onClick={() => setShowLogout(x => !x)}
            >
              {user.sname ? user.sname.charAt(0).toUpperCase() : 'U'}
            </div>
            <div className={`avatar-dropdown-menu${showLogout ? ' show' : ''}`}>
              <button type="button" className="btn btn-primary btn-lg w-100" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="d-flex gap-2">
            <Link to="/register" className="btn btn-primary btn-lg">
              Register
            </Link>
            <Link to="/login" className="btn btn-outline-primary btn-lg">
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
