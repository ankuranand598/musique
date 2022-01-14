function Login() {
  return (
    <>
      <p>If you are an artist you could login and add you albums here</p>
      <div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@artist.com"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Enter Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="********"
          />
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-secondary" type="button">
            Login
          </button>
        </div>
      </div>
    </>
  );
}
export default Login;
