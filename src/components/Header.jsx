import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div className=" fixed top-0 flex text-gray-700 align-middle bg-teal-400 navbar bold">
      <div className="flex-1">
        <NavLink to="/" className="text-xl btn btn-ghost">
          <img src="https://img.icons8.com/?size=100&id=wsaXI0aea252&format=png&color=000000" alt="logo" className="w-10 h-10" />
        </NavLink>
      </div>
      <ul className="flex gap-8 mr-6">
        <li>
          <NavLink to="/book">My Book</NavLink>
        </li>
        <li>
            <NavLink to="/login">Login</NavLink>
        </li>
        <li>
            <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </div>
  );
}
