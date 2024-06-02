import { Link, Navigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/auth';

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

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signed } = useContext(AuthContext);

  if (signed) return <Navigate to="/" />;

  return (
    <div className="min-h-screen bg-base-200 w-vw">
      <div className="flex flex-col lg:flex-row-reverse w-full h-dvh">
        <div className="card shrink-0 shadow-2xl bg-base-100 flex-1 justify-center items-center">
          <form className="card-body w-full max-w-sm justify-center items-center">
            <img
              src="/logoBA.png"
              alt="Bairro Ativo"
              className="w-32 self-start opacity-80"
            />
            <InputField
              label="Nome"
              type="text"
              placeholder="João Silva"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            <div className="form-control w-full mt-6">
              <button className="btn btn-primary">Cadastrar</button>
            </div>
            <div className="form-control">
              <label className="label">
                <Link to="/login" className="link link-hover">
                  Já possui uma conta? Acesse aqui!
                </Link>
              </label>
            </div>
          </form>
        </div>
        <div className="text-center lg:text-left bg-red-100 flex-1 bg-signUp bg-cover bg-center"></div>
      </div>
    </div>
  );
};

export default SignUp;
