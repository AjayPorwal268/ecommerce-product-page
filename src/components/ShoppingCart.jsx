import { useContext } from "react"
import CartContext from "./context/CartContext"
import productThumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import iconDelete from "../assets/images/icon-delete.svg";

export default function ShopingCart() {
    const {cartItem} = useContext(CartContext);
    console.log(cartItem);
    return (
        <div className="h-72 flex flex-col absolute top-20 left-3 right-3 bg-white z-10 rounded-2xl outline-none sm:w-1/3 sm:right-0 sm:left-auto sm:top-10 sm:shadow-2xl">
            <div className="border-b bottom-5 border-slate-300 w-full basis-1/4">
                <div className="p-6 text-xl font-bold">Cart</div>
            </div>
            
            {cartItem === 0 && <div className="flex items-center justify-center basis-3/4 text-xl font-bold text-neutral-darkGrayishBlue">Your cart is empty.</div>}
            {cartItem > 0 && 
                <div className="flex flex-col justify-start items-start p-6 gap-x-6 gap-y-6">
                    <div className="flex gap-x-4">
                        <div style={{'--bg-productThumbnail': `url(${productThumbnail})`}} 
                            className="bg-[image:var(--bg-productThumbnail)] bg-cover bg-no-repeat h-16 w-16 rounded-xl">
                        </div>
                        <div className="text-neutral-darkGrayishBlue">
                            <div>
                                Fall Limited Edition Sneakers
                            </div>
                            <div>
                                $125.00 x {cartItem} <span className="font-bold text-lg">${125.00 * cartItem}.00</span>
                            </div>
                            
                        </div>
                        <img src={iconDelete} className="h-4 w-4 self-center"></img>
                        {/* <div style={{'--bg-iconDelete': `url(${iconDelete})`}} className="bg-[image:var(--bg-iconDelete)] bg-cover bg-no-repeat h-10 w-10">
                        </div> */}
                    </div>
                    <button className="bg-primary-orange w-full p-4 text-white font-bold text-xl rounded-xl">Checkout</button>
                </div>
            }
        </div>
    )
}