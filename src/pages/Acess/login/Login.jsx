import { useContext, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/auth.jsx';

const InputField = ({ label, type, placeholder, value, onChange }) => (
  <div className="form-control w-full">
    <label className="label">
      <span className="label-text">{label}</span>
    </label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input input-bordered"
      required
    />
  </div>
);

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, signed, error } = useContext(AuthContext);
  const { nameBussiness } = useParams();

  const loginUser = async (e) => {
    e.preventDefault();
    await signIn({ email, password });
  };

  if (signed) return <Navigate to={`/${nameBussiness}`} />;

  return (
    <div className="min-h-screen bg-base-200 w-vw">
      <div className="flex flex-col lg:flex-row-reverse w-full h-dvh">
        <div className="card shrink-0 shadow-2xl bg-base-100 flex-1 justify-center items-center">
          <form
            onSubmit={loginUser}
            className="card-body w-full max-w-sm justify-center items-center"
          >
            <img
              src="/logoBA.png"
              alt="Bairro Ativo"
              className="w-24 md:w-32 self-start opacity-80"
            />
            <InputField
              label="Email"
              type="email"
              placeholder="meuemail@email.com.br"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              label="Senha"
              type="password"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <small>{error.error}</small>}
            <div className="form-control w-full mt-6">
              <button className="btn btn-primary">Acessar</button>
            </div>
            <div className="form-control">
              <label className="label">
                <Link to="/cadastrar" className="link link-hover">
                  Criar uma conta
                </Link>
              </label>
            </div>
          </form>
        </div>
        <div className="text-center lg:text-left bg-red-100 flex-1 bg-login bg-cover bg-center"></div>
      </div>
    </div>
  );
}

export default Login;
