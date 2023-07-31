import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Portal({children, wrapperId="app-portal"}) {
    const [wrapperElement, setWrapperElement] = useState(null);

    useLayoutEffect(() => {
        let wrapper = document.getElementById(wrapperId);
        let systemCreatedWrapper = false;
        let element;
        if(!wrapper) {
            element = document.createElement('div');
            element.setAttribute("id", wrapperId);
            document.body.appendChild(element);
            systemCreatedWrapper = true;
            setWrapperElement(element);
        }
        return () => {
            if(systemCreatedWrapper && element && element.parentElement) {
                element.parentElement.removeChild(element);
            }
        }
    },[])

    if(!wrapperElement)return null;

    return(
        createPortal(children, wrapperElement)
    )
}