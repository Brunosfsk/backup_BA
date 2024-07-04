import { Users, LayoutDashboard, Store, LineChart } from 'lucide-react';
import NavBar from '../Dashboard/Navbar/Navbar';
import Sidebar, { SidebarItem } from '../Dashboard/SideBar/Sidebar';
import cadastrosLeads from '../../dados/cadastrosLeads';

const Representantes = () => {
  // console.log(cadastrosLeads.map((item)=> {item.cidade} ))

  const { comercio, id } = cadastrosLeads[0]
  console.log(comercio, id)
  return (
    <div className="h-dvh flex flex-col justify-between ">
      <div className="flex justify-center items-start">
        <Sidebar>
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text={'Representantes'}
          />
          <SidebarItem icon={<Users size={20} />} text={'Representantes'} />
          <SidebarItem icon={<Store size={20} />} text={'Lojas'} />
          <SidebarItem icon={<LineChart size={20} />} text={'Relatórios'} />
        </Sidebar>
        <div className="p-4">
          <NavBar title="Comercial" />
          <div className="overflow-x-auto">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Comercio</th>
                  <th>Responsável BA</th>
                  <th>Contato</th>
                  <th>Segmento</th>
                  <th>Cidade</th>
                  <th>Bairro</th>
                  <th>CEP</th>
                </tr>
              </thead>
              <tbody>
                {cadastrosLeads.map((item) => {
                  return (
                  <tr>
                    <th>{item.id}</th>
                    <td>{item.cidade}</td>
                    <td>{item.comercio}</td>
                    <td>Littel, Schaden and Vandervort</td>
                    <td>Canada</td>
                    <td>12/16/2020</td>
                    <td>Blue</td>
                  </tr>
                  )
                }
                )
                }
              </tbody>
              {/* <tfoot>
                <tr>
                  <th></th>
                  <th>ID</th>
                  <th>Comercio</th>
                  <th>company</th>
                  <th>location</th>
                  <th>Last Login</th>
                  <th>Favorite Color</th>
                </tr>
              </tfoot> */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Representantes;
