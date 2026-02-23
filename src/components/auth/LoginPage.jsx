import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(null);

    // Validación: todos los campos obligatorios
    if (!email.trim() || !password.trim()) {
      setMessage('Todos los campos son obligatorios.');
      setIsSuccess(false);
      return;
    }

    // Validación: password mínimo 6 caracteres
    if (password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres.');
      setIsSuccess(false);
      return;
    }

    // Datos correctos
    setMessage('¡Login exitoso!');
    setIsSuccess(true);
  };

  return (
    <main>
      <section className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card shadow">
              <div className="card-body p-4">
                <h2 className="card-title text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="login-email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="login-email"
                      placeholder="ejemplo@correo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="login-password" className="form-label">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="login-password"
                      placeholder="Mínimo 6 caracteres"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Enviar
                  </button>
                </form>
                {message && (
                  <div
                    className={`alert mt-3 mb-0 ${
                      isSuccess ? 'alert-success' : 'alert-danger'
                    }`}
                    role="alert"
                  >
                    {message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
