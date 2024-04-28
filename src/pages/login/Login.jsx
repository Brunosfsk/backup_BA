import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/auth.jsx';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { signIn, signed, error } = useContext(AuthContext)

  const loginUser = async (e) => {
    e.preventDefault();
    await signIn({ email, password })
  }

  if (signed) {
    return navigate('/');
  } else {
    return (
      <div className=" min-h-screen bg-base-200 w-vw">
        <div className="flex flex-col lg:flex-row-reverse w-full h-dvh">
          <div className="card shrink-0 shadow-2xl bg-base-100 flex-1 justify-center items-center">
            <form onSubmit={loginUser} className="card-body w-full max-w-sm justify-center items-center">
              <img src="/logoBA.png" alt="Bairro Ativo" className='w-32 self-start opacity-80' />
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="meuemail@email.com.br" onChange={(e) => setEmail(e.target.value)} className="input input-bordered" required />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Senha</span>
                </label>
                <input type="password" placeholder="*******" onChange={(e) => setPassword(e.target.value)} className="input input-bordered" required />
              </div>
              <small>{error && error}</small>
              <div className="form-control w-full mt-6">
                <button className="btn btn-primary">Acessar</button>
              </div>
              <div className="form-control">
                <label className="label">
                  <Link to="/cadastrar" className=" link link-hover">Criar uma conta</Link>
                </label>
              </div>
            </form>
          </div>
          <div className="text-center lg:text-left bg-red-100 flex-1 bg-login bg-cover bg-center">
          </div>
        </div>
      </div>
    )
  }

}

export default Login;