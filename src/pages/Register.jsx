export default function Register() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <h3 className="mb-5 text-5xl font-bold text-teal-400">Register</h3>
            <form className="card shadow-xl p-10">
              <div className="form-control">
                <label className="label" htmlFor="firstname">
                  <span className="label-text">Firstname</span>
                </label>
                <input
                  type="text"
                  placeholder="Firstname"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="lastname">
                  <span className="label-text">Lastname</span>
                </label>
                <input
                  type="text"
                  placeholder="Lastname"
                  className="input input-bordered"
                />
              </div>
              <div className="flex form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="flex form-control">
                <label className="label" htmlFor="password">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="flex form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-primary bg-teal-400 hover:bg-teal-600 hover:border-transparent border-transparent text-white"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
