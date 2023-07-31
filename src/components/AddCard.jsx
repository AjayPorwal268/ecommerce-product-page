import iconPlus from "../assets/images/icon-plus.svg";
import iconMinus from "../assets/images/icon-minus.svg"
import { useContext, useState } from "react";
import CartContext from "./context/CartContext";


export default function AddCard() {
    const [productQantity, setProductQuantity] = useState(0);
    const {setCartItem} = useContext(CartContext);

    const addProduct = () => {
        setProductQuantity((preState) => {
            return preState+1;
        })
    }

    const substractProduct = () => {
        setProductQuantity((preState) => {
            return preState === 0 ? 0 : preState-1;
        })
    }

    const addItemToCart = () => {
        setCartItem(productQantity);
    }

    return (
        <>
            <div className='flex justify-between items-center px-4 py-3 bg-neutral-lightGrayishBlue rounded-md sm:basis-1/3'>
                <div style={{'--icon-minus': `url(${iconMinus})`}} 
                    className='text-primary-orange bg-[image:var(--icon-minus)] bg-no-repeat h-4 w-4 mt-3 self-center flex items-center hover:cursor-pointer'
                    onClick={substractProduct}></div>
                <div className="h-6 w-8 self-start font-bold">{productQantity}</div>
                <div style={{'--icon-plus': `url(${iconPlus})`}}  
                    className='text-primary-orange bg-[image:var(--icon-plus)] bg-no-repeat h-4 w-4 mt-1 hover:cursor-pointer' onClick={addProduct}></div>
            </div>
            <div className="bg-primary-orange py-3 rounded-lg flex justify-center items-center 
                shadow-2xl shadow-primary-pale_Orange gap-x-4 sm:basis-2/3 hover:cursor-pointer" onClick={addItemToCart}>
                <svg className="w-8 h-6 text-white fill-current mt-1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" 
                        />
                </svg>
                <span className="text-white font-bold">Add to cart</span>
            </div>
        </>
        
    )
}