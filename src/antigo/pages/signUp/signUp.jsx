// import { useState } from 'react';
import './signUp.css';
import { Link } from 'react-router-dom';
// import api from '../../services/api'

import logo from '../../assets/logoBA.png';
import food from '../../assets/singup.jpg'

function SignUp() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const login = async ()=>
  // {
  //   //const res = await 
  //   api.post("/auth/comercio",
  //   {
  //      "email":email,
  //      "senha" :password
  //   }
  //   ).then((resposta)=>
  //   {
  //     alert(resposta.data.token)
  //     console.log(resposta.data);
  //   }
  //   ).
  //   catch((error)=>
  //   {
  //     alert(error)
  //   }
  //   )

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

          <form>
            <h1>Cadastrar</h1>
            <input type="text" placeholder="nome" />
            <input type="text" placeholder="meuemail@email.com.br" />
            <input type="passwords" placeholder="************"  />
            <button type="submit" onClick={()=>alert("ok")}>Salvar</button>
          </form>

          <Link to="/login">já possuo uma conta acessar</Link>
        </div>
      </div>

    </div>
  )

}

export default SignUp;