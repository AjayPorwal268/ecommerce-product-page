import { flushSync } from 'react-dom';
import iconMenu from '../assets/images/icon-menu.svg';
import iconCart from '../assets/images/icon-cart.svg';
import imageAvatar from '../assets/images/image-avatar.png';
import ShopingCart from './ShoppingCart';
import { useContext, useState } from 'react';
import NavBar from './NavBar';
import Portal from './ModelComponents/Portal';
import Model from './ModelComponents/Model';
import CartContext from './context/CartContext';

export default function Header() {
    const [displayCart, setDisplayCart] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);
    const {cartItem} = useContext(CartContext);
    
    const openCart = () => {
        setDisplayCart(preState => {
            return !preState;
        })
    }

    const toggleDrawer = (value) => {
        flushSync(() => {
            setShowDrawer(value);
        });
    }

    return (
        <>
            <header className='flex items-center relative h-12 gap-x-6 border-b-0 px-6 mt-3 mb-4 sm:px-0 sm:mx-24 sm:mt-6 sm:mb-0 sm:border-b-2 sm:h-16 sm:items-start'>
                <div className='sm:hidden' onClick={() => toggleDrawer(true)}><img src={iconMenu} alt="menu-icon" className=''></img></div>
                <div className='self-start flex-grow text-3xl font-bold sm:leading-5 sm:flex-grow-0 text-neutral-black'>sneakers</div>
                <div className= "hidden sm:flex sm:flex-grow ml-4 text-neutral-grayishBlue font-semibold"><NavBar></NavBar></div>
                <div className='relative hover:cursor-pointer' onClick={openCart}>
                    <img src={iconCart} alt="cart-icon">
                    </img>
                    {cartItem > 0 && <span className='absolute -top-2 -right-1 text-xs font-bold text-white leading-3 px-1 bg-primary-orange rounded-lg self-center'>{cartItem}</span>}
                </div>
                <div className='sm:-mt-3 hover:cursor-pointer'><img className='w-full h-8 sm:h-12' src={imageAvatar} alt="profile-pic"></img></div>
                {displayCart && <ShopingCart />}
            </header>
            {
              showDrawer &&  (
                <Portal>
                    <Model isOpen={showDrawer}>
                        <div id="drawer" className={`flex-col gap-y-16 px-6 font-bold py-6 
                            ${showDrawer ? "flex" : "hidden"}  absolute ${showDrawer ? "w-3/5" : "w-0"} duration-1000 bg-white h-[100vh]`}>
                            <svg className="h-4 w-4 fill-current text-neutral-darkGrayishBlue hover:cursor-pointer" onClick={() => toggleDrawer(false)} xmlns="http://www.w3.org/2000/svg">
                                <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"/>
                            </svg>
                            <NavBar></NavBar>
                        </div>
                    </Model>
                </Portal>
            )}
        </>
        
    )
}