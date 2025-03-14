import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helper";

type OrderTotalsProps = {
    order: OrderItem[];
    tip: number
    placeOrder: () => void
}

export default function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {

    const subtotalAmount = useMemo(() =>
        order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])

    const totalAmount = useMemo(()=>subtotalAmount+ tipAmount,[tip, order])


    return (
        <>
            <div className="space-y-3">
                <h3 className=" text-slate-700text-bold text-slate-700 text-xl font-bold">
                    Totales y Propinas
                </h3>
                <p>Subtotal a pagar: <span className="font-bold">{formatCurrency(subtotalAmount)}</span> </p>
                <p>Propina: <span className="font-bold">{formatCurrency(tipAmount)}</span></p>
                <p>Total a pagar: <span className="font-bold">{formatCurrency(totalAmount)}</span></p>
            </div>
            <button className="w-full bg-slate-700 p-3 uppercase text-white font-bold mt-10 disabled:opacity-10" onClick={()=>placeOrder()}>Guardar la Orden</button>

        </>
    )
}
