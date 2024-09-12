import { Plus, SquarePen } from 'lucide-react';
import { useOrdersBussines } from '../../../hooks/public/useOrdersBussines';

const Stores = () => {
  const { data: orders } = useOrdersBussines();

  return (
    <div className="p-4 h-dvh">
      <section className="relative flex flex-col min-w-0 break-words w-full rounded ">
        <article className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-2 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base">
                Produtos
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right flex justify-end">
              <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex gap-1 items-center justify-center"
                type="button"
              >
                <Plus className="w-5" /> produto
              </button>
            </div>
          </div>
        </article>

        <article className="block w-full overflow-x-auto">
          <table className="items-center bg-transparent w-full border-collapse ">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Produto
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Categoria
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Preço
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Catálogo
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></th>
              </tr>
            </thead>

            <tbody>
              {orders &&
                !orders.error &&
                orders.map(({ category, name, price, photo_thumb }, i) => (
                  <tr key={i}>
                    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2 text-left text-blueGray-700 flex gap-1 items-center h-16">
                      <img
                        src={photo_thumb && photo_thumb}
                        alt="Foto do produto"
                        className="h-full"
                      />
                      <p>{name}</p>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      {category}
                    </td>
                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {Number(price).toCurrency()}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <input
                        type="checkbox"
                        className="toggle"
                        defaultChecked
                      />
                    </td>
                    <td>
                      <SquarePen />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </article>
      </section>
    </div>
  );
};

export default Stores;
