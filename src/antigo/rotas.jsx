import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Checkout from "./pages/checkout/index.jsx";
import Financeiro from "./pages/financeiro/index.jsx";
import Login from "./pages/login/login.jsx";
import SignUp from "./pages/signUp/signUp.jsx";
// import Historico from "./pages/historico/historico.jsx";

const Private = ({ Item }) => {
    const signed = false;

    return signed > 0 ? <Item /> : <SignUp />
};

function Rotas() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/checkout" element={<Checkout />} /> */}
            {/* <Route path="/financeiro" element={<Financeiro />} /> */}
            {/* <Route path="/" element={<Private item={Home}/>} />
            <Route path="/checkout" element={<Private item={Checkout}/>}/>
            <Route path="/financeiro" element={<Private item={Financeiro}/>}/> */}
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="*" element={<SignUp />} /> */}
        </Routes>
    </BrowserRouter>
}

export default Rotas;