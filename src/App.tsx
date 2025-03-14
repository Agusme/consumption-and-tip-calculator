import MenuItems from "./components/MenuItems";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { addItem, order, removeItem, tip, setTip, placeOrder } = useOrder()
  return (
    <>
      <header className="relative  h-72 w-full bg-[url('https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg')] bg-cover bg-center  ">
        <div className="absolute  inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="uppercase text-white text-center text-3xl font-bold">
            Calculadora de Propinas y Consumos
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto p-20 md:grid grid-cols-2 gap-10">
        <div className=" border border-gray-700 p-5 rounded-lg space-y-10 mt-2">
          <h2 className="font-bold text-amber-800 text-2xl ">Menú</h2>
          {menuItems.map(item => (<MenuItems key={item.id} item={item} addItem={addItem} />))}
        </div>
        <div className="p-5 border border-amber-800 border-dashed rounded-lg space-y-10  mt-2 ">
          {" "}
          <h2 className="font-bold text-slate-700 text-2xl"> Consumos</h2>
          {order.length ? (
            <>
              <OrderContents order={order} removeItem={removeItem} />
              <TipPercentageForm tip={tip} setTip={setTip} />
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (<p className="text-center">Orden está vacia</p>)}
        </div>
      </main>
    </>
  );
}

export default App;
