import React, { useState } from 'react'
import './App.css'
import ImagetCarousalComponent from './components/ImageCarousalComponent'
import AddCard from './components/AddCard'
import Header from './components/Header'
import CartContext from './components/context/CartContext'

function App() {
  const [cartItem, setCartItem] = useState(0)
  return (
    <div className='container'>
      <CartContext.Provider value={{cartItem, setCartItem}}>
        <Header />
        <main className='flex flex-col gap-y-4 sm:flex-row sm:justify-center sm:items-center sm:gap-x-24 '>
          <div className='sm:gap-x-24 sm:pl-28 sm:py-20 sm:basis-1/2'>
            <div className='sm:basis-1/2 sm:hidden'><ImagetCarousalComponent showArrow={true}/></div>
            <div className='sm:basis-1/2 hidden sm:block'><ImagetCarousalComponent showArrow={false}/></div>
          </div>
          <div className='py-4 px-6 flex flex-col gap-y-4 basis-1/2 sm:self-center sm:pr-28'>
            <div className='text-primary-orange font-bold sm:text-xl'>Sneaker Company</div>
            <div className='text-2xl font-bold sm:text-4xl'>Fall Limited Edition<br></br>Sneakers</div>
            <div className='text-neutral-darkGrayishBlue'>These low-profile sneakers are your perfect casual wear companion. 
              Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</div>
            
            {/* price section */}
            <div className='flex gap-x-4 items-center sm:flex-col sm:items-start sm:gap-y-4'>
              <div className='flex gap-x-4 items-center grow'>
                <div className='font-bold text-3xl'>$125</div>
                <div className='grow'><span className='bg-primary-pale_Orange px-2 rounded-lg text-primary-orange font-bold'>50%</span></div>
              </div>
              <div className='text-neutral-grayishBlue'>$250.00</div>
            </div>

            {/* slelect quantity section */}
            <div className='flex flex-col gap-y-4 sm:flex-row sm:justify-between sm:gap-x-6'>
              {/* <SelectProductQantity /> */}
              <AddCard />
            </div>
          </div>
        </main>
      </CartContext.Provider>
    </div>
  )
}

export default App
