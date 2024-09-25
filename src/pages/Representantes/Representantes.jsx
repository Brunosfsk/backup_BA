import { Users, LayoutDashboard, Store, LineChart, Search } from 'lucide-react';
import NavBar from '../Dashboard/Navbar/Navbar';
import SidebarComp from '../../components/Sidebar/Sidebar.jsx';
import cadastrosLeads from '../../dados/cadastrosLeads';
import MaskSystem from '../../components/Templates/System/MaskSystem.jsx';

const Representantes = () => {
  const { comercio, id } = cadastrosLeads[0];

  return (
    <div className="flex h-screen w-full bg-muted">
      <SidebarComp />
      <div className="flex flex-col w-full">
        <NavBar title="Leads / Clientes" />
        <div className='flex flex-col w-full items-center justify-center flex-grow'>
          {/* Search and Filter Section */}
          <div className="flex items-center gap-6 w-11/12 p-6 bg-white shadow rounded-lg -mt-16 mb-8">
            <div className="flex w-1/3 items-center bg-muted rounded-lg px-4 py-2">
              <Search className="mr-2 text-muted-foreground" />
              <input type="text" className="w-full bg-transparent outline-none" placeholder="Search" />
            </div>

            <select className="bg-muted border-2 border-input rounded-lg px-4 py-2">
              <option disabled selected>Escolha...</option>
              <option>Bairro</option>
              <option>Status</option>
              <option>Segmento</option>
              <option>Nome</option>
            </select>
          </div>

          {/* Data Table Section */}
          <div className="w-11/12 p-6 bg-white shadow rounded-lg flex-grow">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead>
                  <tr className='text-base font-semibold'>
                    <th>ID</th>
                    <th>Comercio</th>
                    <th>Responsável BA</th>
                    <th>Contato</th>
                    <th>Segmento</th>
                    <th>Cidade</th>
                    <th>Bairro</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {cadastrosLeads.map((item, i) => (
                    <tr key={i} className='text-base'>
                      <td>{item.id}</td>
                      <td>{item.cidade}</td>
                      <td>{item.comercio}</td>
                      <td>Littel, Schaden and Vandervort</td>
                      <td>Canada</td>
                      <td>12/16/2020</td>
                      <td>Vandervort</td>
                      <td>
                        <span className='bg-purple-500 text-white px-2 py-1 rounded-xl'>
                          Sem contato
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Representantes;
