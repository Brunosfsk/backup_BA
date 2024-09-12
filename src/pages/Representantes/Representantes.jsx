import { Users, LayoutDashboard, Store, LineChart } from 'lucide-react';
import NavBar from '../Dashboard/Navbar/Navbar';
import SidebarComp from '../../components/Sidebar/Sidebar.jsx';
import cadastrosLeads from '../../dados/cadastrosLeads';
import MaskSystem from '../../components/Templates/System/MaskSystem.jsx';

const Representantes = () => {
  // console.log(cadastrosLeads.map((item)=> {item.cidade} ))

  const { comercio, id } = cadastrosLeads[0];
  // console.log(comercio, id);
  return (
    <div className="h-dvh w-full flex bg-[#EEEEEE] justify-center">
      <SidebarComp />
      <div className="flex flex-col items-start w-full">
        <NavBar title="Dashboard" />
        <div className='flex flex-col w-full items-center justify-center h-full'>
          <div className="flex p-4 w-11/12 h-48 border-2 bg-white rounded-3xl -mt-24 mb-8 gap-16 items-center">
            <label className="input input-bordered flex items-center gap-2 w-1/3">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd" />
              </svg>
            </label>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>Escolha...</option>
              <option>Bairro</option>
              <option>Status</option>
              <option>Segmento</option>
              <option>Nome</option>
            </select>
          </div>
          <div className="p-4 w-11/12 border-2 bg-white rounded-3xl h-full">
            <div className="overflow-x-auto">
              <table className="table table-xs">
                <thead>
                  <tr className='text-lg'>
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
                    <tr className='text-lg' key={i}>
                      <th>{item.id}</th>
                      <td>{item.cidade}</td>
                      <td>{item.comercio}</td>
                      <td>Littel, Schaden and Vandervort</td>
                      <td>Canada</td>
                      <td>12/16/2020</td>
                      <td>Vandervort</td>
                      <td><small className='bg-purple-500 text-white px-2 py-1 rounded-xl'>Sem contato</small></td>
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