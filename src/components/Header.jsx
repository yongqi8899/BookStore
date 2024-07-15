import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Header() {
  const navigate = useNavigate()
  const [token, setToken] = useState(!!localStorage.getItem("token"));
  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
    navigate("/login");
  };
console.log(token);
  const handleLogin = () => {
    window.location.reload();
  }
  return (
    <div className=" fixed top-0 flex text-gray-700 align-middle bg-teal-400 navbar bold">
      <div className="flex-1">
        <NavLink to="/" className="text-xl btn btn-ghost">
          <img
            src="https://img.icons8.com/?size=100&id=wsaXI0aea252&format=png&color=000000"
            alt="logo"
            className="w-10 h-10"
          />
        </NavLink>
      </div>
      <ul className="flex gap-8 mr-6">
        <li>
          <NavLink to="/book">My Book</NavLink>
        </li>
        {!token && (
          <>
            <li>
              <NavLink to="/login" onClick={handleLogin}>Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </>
        )}
        {token && (
          <li>
            <NavLink to="/login" onClick={handleLogout}>Logout</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}
