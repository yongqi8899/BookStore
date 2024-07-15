import { NavLink } from "react-router-dom";
export default function Login() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <h3 className="mb-5 text-5xl font-bold text-teal-400">Login</h3>
            <form className="card shadow-xl p-10">
  
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="password">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <br />
              <p>
                No account?{" "}
                <NavLink to="/register" className="text-teal-400">
                  Register
                </NavLink>
              </p>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary bg-teal-400 hover:bg-teal-600 hover:border-transparent border-transparent text-white"
                >Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
