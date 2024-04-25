import { useContext, useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logoBA.png';
import food from '../../assets/login2.jpg'
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
      <div className="container-login">
        <div className='container-left'>
          <img src={food} alt="Food Bairro Ativo" />
        </div>
        <div className='container-rigth'>
          <div className="login">
            <div className="login-area">
              <img src={logo} alt="Bairro Ativo" />
            </div>
            <form onSubmit={loginUser}>
              <h1>Entrar</h1>
              <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="meuemail@email.com.br" required />
              <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="************" required />
              <small className='errorMessage'>{error}</small>
              <button type="submit">Acessar</button>
            </form>
            <Link to="/signup">Criar uma conta</Link>
          </div>
        </div>

      </div>
    )
  }

}

export default Login;