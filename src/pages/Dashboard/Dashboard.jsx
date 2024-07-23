import { Users, LayoutDashboard, Store, LineChart } from 'lucide-react';
import NavBar from './Navbar/Navbar';
import Sidebar, { SidebarItem } from './SideBar/Sidebar';
import { Link, useParams } from 'react-router-dom';

const Dashboard = () => {
  const { nameBussiness } = useParams();

  return (
    <div className="h-dvh flex flex-col justify-between ">
      <div className="flex justify-center items-start">
        <Sidebar>
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text={'Representantes'}
          />
          <SidebarItem icon={<Users size={20} />} text={'Representantes'} />
          <Link to={`/${nameBussiness}/dashboard/lojas`}>
            <SidebarItem icon={<Store size={20} />} text={'Lojas'} />
          </Link>
          <SidebarItem icon={<LineChart size={20} />} text={'Relatórios'} />
        </Sidebar>

        <NavBar />
      </div>
    </div>
  );
};

export default Dashboard;
