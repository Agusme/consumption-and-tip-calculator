import type{  MenuItems } from "../types";

type MenuItemsProps={
    item:MenuItems,
    addItem: (item:MenuItems) => void}

export default function MenuItems({item, addItem}: MenuItemsProps) {
    return (
        <>
        
            <button className="p-3 border-2 border-slate-500 w-full flex justify-between hover:bg-slate-200" onClick={()=>addItem(item)}>
                <p className="font-semibold">{item.name} </p>
                <p className="font-black"> ${item.price} </p>
            </button>
        </>
    )
}
