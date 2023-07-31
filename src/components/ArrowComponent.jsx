import iconLeft from "../assets/images/icon-previous.svg";
import iconRight from "../assets/images/icon-next.svg";

export default function ArrowComponent({direction, clickFunction}) {
    const styleClass = direction === "left" ? "flex justify-center items-center bg-neutral-white w-10 h-10 rounded-full absolute top-36 left-2" : 
        "flex justify-center items-center bg-neutral-white w-10 h-10 rounded-full absolute top-36 right-2"
    return (
        <div className={styleClass} onClick={clickFunction}>
            <div style={{'--bg-icon': `url(${direction === "left" ? iconLeft : iconRight})`}} 
                className="bg-[image:var(--bg-icon)] bg-no-repeat w-3 h-3 bg-cover bg-center" ></div>
            {/* {direction === "left" &&  <div style={{'--bg-icon-left': `url(${direction === "left" ? iconLeft : iconRight})`}} 
                className="bg-[image:var(--bg-icon-left)] bg-no-repeat w-3 h-3 bg-cover bg-center"></div>}
            {direction === "right" &&  <div style={{'--bg-icon-right': `url(${iconRight})`}} 
                className="bg-[image:var(--bg-icon-right)] bg-no-repeat w-3 h-3 bg-cover bg-center"></div>} */}
        </div>
        
    )
}