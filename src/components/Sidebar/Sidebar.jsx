import {
  Users,
  LayoutDashboard,
  Store,
  LineChart,
  CircleDollarSign,
  Settings,
} from 'lucide-react';
import Sidebar, { SidebarItem } from '../../pages/Dashboard/SideBar/Sidebar';
// import NavBar from '../../pages/Dashboard/Navbar/Navbar';
// import Representantes from '../../pages/Representantes/Representantes';
import { useNavigate, useParams } from 'react-router-dom';

function SidebarComp() {
  const navigate = useNavigate();

  const { nameBussiness } = useParams();
  return (
    <div className="h-dvh flex flex-col justify-between ">
      <div className="flex justify-center items-start">
        <Sidebar>
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text={'Dashboard'}
            onClick={() => navigate(`/${nameBussiness}/dashboard`)}
          />
          <SidebarItem
            icon={<Store size={20} />}
            text={'Minha Loja'}
            onClick={() => navigate(`/${nameBussiness}/representantes`)}
          />
          <SidebarItem
            icon={<CircleDollarSign size={20} />}
            text={'Financeiro'}
            onClick={() => navigate(`/${nameBussiness}/relatorios`)}
          />
          <SidebarItem
            icon={<Settings size={20} />}
            text={'Configurações'}
            onClick={() => navigate(`/${nameBussiness}/promocoes`)}
          />
          <hr />
          <SidebarItem
            icon={<Users size={20} />}
            text={'Base Clientes'}
            onClick={() => navigate(`/${nameBussiness}/representantes`)}
          />
          {/* <SidebarItem icon={<Users size={20} />} text={'Representantes'} onClick={() => alert('ok')}/> */}
          <SidebarItem
            icon={<LineChart size={20} />}
            text={'Relatórios'}
            onClick={() => navigate(`/${nameBussiness}/relatorios`)}
          />
        </Sidebar>
        {/* <NavBar /> */}
      </div>
    </div>
  );
}

export default SidebarComp;
