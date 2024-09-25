import { CircleDollarSign, Banknote, Landmark } from 'lucide-react';
import NavBar from './Navbar/Navbar';
import SidebarComp from '../../components/Sidebar/Sidebar';
import Card from './components/Card';
import BtnSuportBug from '../../components/BtnSuportBug/BtnSuportBug';
import { Chart } from './components/Chart';

const Dashboard = () => {
  let numero = 'R$ 68,80';
  numero = numero.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <>
      <div className="flex flex-col items-start w-full bg-[#EEEEEE] h-full">
        <NavBar title="Dashboard" />
        <div className="flex flex-col flex-wrap justify-center w-11/12 ml-20 gap-8">
          <div className='flex gap-32'>
            <Card
              description="Total vendas"
              title="Vendas"
              className="bg-orange-700 -mt-24 flex-1 min-w-[250px]"
              number="R$ 5.000,80"
            >
              <CircleDollarSign className="text-white w-12 h-12 p-0" />
            </Card>
            <Card
              description="Média de vendas por cliente"
              title="Ticket médio"
              className="bg-purple-700 -mt-24 flex-1 min-w-[250px]"
              number={numero}
            >
              <Banknote className="text-white w-12 h-12 p-0" />
            </Card>
            <Card
              description="Capital total em vendas"
              title="Entradas"
              className="bg-green-700 -mt-24 flex-1 min-w-[250px]"
              number="R$ 23.000,80"
            >
              <Landmark className="text-white w-12 h-12 p-0 m-0" />
            </Card>
          </div>
          <div className="flex-1 w-full min-w-[750px]">
            {/* <img
              src="/VendasXtickt.jpg"
              alt="Bairro Ativo"
              className="self-start opacity-80 w-full h-full"
            /> */}
            <Chart />
          </div>
        </div>
      </div>
      <BtnSuportBug />
    </>
  );
};

export default Dashboard;
