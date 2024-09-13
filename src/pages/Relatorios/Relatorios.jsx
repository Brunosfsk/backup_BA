import { Users, LayoutDashboard, Store, LineChart, CircleDollarSign, Banknote, Landmark } from 'lucide-react';
import NavBar from '../Dashboard/Navbar/Navbar.jsx';
import SidebarComp from '../../components/Sidebar/Sidebar.jsx';
import cadastrosLeads from '../../dados/cadastrosLeads.js';
import MaskSystem from '../../components/Templates/System/MaskSystem.jsx';
import Card from '../Dashboard/components/Card.jsx';
import BtnSuportBug from '../../components/BtnSuportBug/BtnSuportBug.jsx';

const Relatorios = () => {

  return (
    <div className="h-dvh w-full flex bg-[#EEEEEE]">
      <SidebarComp />
      <div className="flex flex-col items-start w-full">
        <NavBar title="Relatórios" />
        <div className="grid grid-cols-4 grid-rows-3 gap-2 justify-center w-full ml-20">
          <Card description="Total de clientes ativos" title="Clientes" className="bg-orange-700 -mt-24" number={48}>
            <CircleDollarSign className="text-white w-12 h-12" />
          </Card>
          <Card description="Média de vendas dos cliente" title="Ticket médio" className="bg-purple-700 -mt-24" number="R$ 68,80">
            <Banknote className="text-white w-12 h-12" />

          </Card>
          <Card description="Todos clientes da Base" title="Base Clientes" className="bg-green-700 -mt-24" number={304} >
            <Landmark className="text-white w-12 h-12" />

          </Card>
          <div className="row-span-2 col-span-3 w-full">
            <img
              src="/VendasXtickt.jpg"
              alt="Bairro Ativo"
              className="self-start opacity-80 w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relatorios;



