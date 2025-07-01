import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> 7c047546dc57cdaa5ba6f0c01eb1b0e6320080c3

const Navbar = () => {
  const total = 25000;
  const token = false; // Cambia esto a `true` para simular un usuario autenticado

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
<<<<<<< HEAD
        <Link className="btn btn-dark" to="/">🍕 Home</Link>
        {token ? (
          <>
            <Link className="btn btn-dark" to="/profile">🔓 Profile</Link>
=======
        <a className="btn btn-dark" href="/">🍕 Home</a>
        {token ? (
          <>
            <a className="btn btn-dark" href="/profile">🔓 Profile</a>
>>>>>>> 7c047546dc57cdaa5ba6f0c01eb1b0e6320080c3
            <button className="btn btn-dark" onClick={() => console.log('Logout')}>🔒 Logout</button>
          </>
        ) : (
          <>
<<<<<<< HEAD
            <Link className="btn btn-dark" to="/login">🔐 Login</Link>
            <Link className="btn btn-dark" to="/register">🔐 Register</Link>
          </>
        )}
        <Link className="btn btn-dark" to="/cart">🛒 Total: ${total.toLocaleString()}</Link>
=======
            <a className="btn btn-dark" href="/login">🔐 Login</a>
            <a className="btn btn-dark" href="/register">🔐 Register</a>
          </>
        )}
        <a className="btn btn-dark" href="/cart">🛒 Total: ${total.toLocaleString()}</a>
>>>>>>> 7c047546dc57cdaa5ba6f0c01eb1b0e6320080c3
      </div>
    </nav>
  );
};

export default Navbar;
