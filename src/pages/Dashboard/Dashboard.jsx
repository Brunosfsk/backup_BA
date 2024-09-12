import { Users, LayoutDashboard, Store, LineChart, BadgePercent, Star, CircleDollarSign, Banknote, Landmark } from "lucide-react";
import NavBar from "./Navbar/Navbar";
import Sidebar, { SidebarItem } from "./SideBar/Sidebar";
import SidebarComp from "../../components/Sidebar/Sidebar";
import Card from "./components/Card";
import BtnSuportBug from "../../components/BtnSuportBug/BtnSuportBug";

const Dashboard = () => {

    let numero = "R$ 68,80"
    numero = numero.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

    return (
        <div className="h-dvh w-full flex bg-[#EEEEEE]">
            <SidebarComp />
            <div className="flex flex-col items-start w-full">
                <NavBar title="Dashboard" />
                <div className="grid grid-cols-4 grid-rows-3 gap-2 justify-center w-full ml-20">
                    <Card description="Total vendas" title="Vendas" className="bg-orange-700 -mt-24" number="R$ 5.000,80">
                        <CircleDollarSign className="text-white w-12 h-12 p-0" />
                    </Card>
                    <Card description="Média de vendas por cliente" title="Ticket médio" className="bg-purple-700 -mt-24" number={numero}>
                        <Banknote className="text-white w-12 h-12 p-0" />

                    </Card>
                    <Card description="Capital total em vendas" title="Entradas" className="bg-green-700 -mt-24" number="R$ 23.000,80">
                        <Landmark className="text-white w-12 h-12 p-0 m-0" />

                    </Card>
                    <div className="row-span-2 col-span-3 w-full">
                        <img
                            src="/VendasXtickt.jpg"
                            alt="Bairro Ativo"
                            className="self-start opacity-80 w-full h-full"
                        />
                        {/* <Card title="Grafico principal" className="bg-[#295F98] w-full h-full"></Card> */}
                    </div>
                </div>
                {/* <h1>Acompanhe o resumo dos seus resultados</h1> */}
            </div>
            <BtnSuportBug />
        </div>
    );
};

export default Dashboard;
