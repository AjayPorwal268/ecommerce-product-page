import iconPlus from "../assets/images/icon-plus.svg";
import iconMinus from "../assets/images/icon-minus.svg"

export default function SelectProductQantity() {
    return (
        <div className='flex justify-between items-center px-4 py-3 bg-neutral-lightGrayishBlue rounded-md sm:basis-1/3'>
          <div style={{'--icon-minus': `url(${iconMinus})`}} 
            className='text-primary-orange bg-[image:var(--icon-minus)] bg-no-repeat h-4 w-4 mt-3 self-center flex items-center'></div>
          <div className="h-6 w-8 self-start font-bold">0</div>
          <div style={{'--icon-plus': `url(${iconPlus})`}}  
            className='text-primary-orange bg-[image:var(--icon-plus)] bg-no-repeat h-4 w-4 mt-1'></div>
        </div>
    )
}