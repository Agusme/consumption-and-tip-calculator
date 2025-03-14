import { MenuItems, OrderItem } from "../types";
import {formatCurrency} from '../helper';
type OrderContentesProp = {
    order: OrderItem[];
    removeItem: (id: MenuItems["id"]) => void

};
export default function OrderContents({ order, removeItem }: OrderContentesProp) {
    return (
        <>
        <div className="space-y-3">
            {order.map(item => (

                <div className="flex justify-between border-t items-center border-gray-200 last-of-type:border-b ">
                    <div>
                        <p className="text-lg">{item.name} - ${item.price} </p>
                        <p className="font-black">Cantidad: {item.quantity} - {formatCurrency(item.quantity* item.price)}  </p>
                    </div>
                    <div>
                        <button className="bg-red-600 text-white font-bold rounded-full h-8 w-8 " onClick={()=> removeItem(item.id)}>X</button>
                    </div>
                </div>
            ))}
        </div>

        </>
    );
}
