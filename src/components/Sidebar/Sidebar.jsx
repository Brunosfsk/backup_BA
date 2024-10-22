import {
  Users,
  LayoutDashboard,
  Store,
  LineChart,
  CircleDollarSign,
  Settings,
  ShoppingCart,
} from 'lucide-react';
import Sidebar, { SidebarItem } from '../../pages/Dashboard/SideBar/Sidebar';
import { useNavigate } from 'react-router-dom';

function SidebarComp() {
  const navigate = useNavigate();

  return (
    <div className="h-dvh flex flex-col justify-between ">
      <div className="flex justify-center items-start">
        <Sidebar>
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text={'Dashboard'}
            onClick={() => navigate(`/dashboard`)}
          />
          <SidebarItem
            icon={<Store size={20} />}
            text={'Minha Loja'}
            onClick={() => navigate(`/minha-loja`)}
          />
          {/* <SidebarItem
            icon={<CircleDollarSign size={20} />}
            text={'Financeiro'}
            onClick={() => navigate(`/relatorios`)}
          /> */}
          <SidebarItem
            icon={<Settings size={20} />}
            text={'Configurações'}
            onClick={() => navigate(`/configuracoes`)}
          />
          {/* <SidebarItem
            icon={<Users size={20} />}
            text={'Base Clientes'}
            onClick={() => navigate(`/representantes`)}
          />
          <SidebarItem
            icon={<LineChart size={20} />}
            text={'Relatórios'}
            onClick={() => navigate(`/relatorios`)}
          /> */}
        </Sidebar>
        {/* <NavBar /> */}
      </div>
    </div>
  );
}

export default SidebarComp;
