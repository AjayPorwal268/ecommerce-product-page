import { useState } from "react";
import ImageCarousalComponent from "./ImageCarousalComponent";
import Model from "./ModelComponents/Model";
import Portal from "./ModelComponents/Portal";
import iconClose from "../assets/images/icon-close.svg"

export default function ImageSlide({img, clickeble}) {

    const [isOpen, setIsOpen] = useState(false);

    const clickHandler = () => {
        if(!clickeble)return;
        setIsOpen(true);
    }

    return (
        <>
            <div style={{'--bg-shorten-mobile': `url(${img})`}} className="bg-[image:var(--bg-shorten-mobile)] bg-cover bg-no-repeat h-full w-full" onClick={clickHandler}>
            </div>
            {
                isOpen && (
                <Portal>
                    <Model isOpen={isOpen}>
                        <div className="w-1/3 flex flex-col gap-y-4 justify-center items-center m-auto">
                            <svg className="h-4 w-4 text-white fill-current self-end hover:cursor-pointer" onClick={() => setIsOpen(false)} xmlns="http://www.w3.org/2000/svg">
                                <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"/>
                            </svg>
                            <ImageCarousalComponent showArrow={true}/>
                        </div>
                    </Model>
                </Portal>
            )}
        </>
        
    )
}