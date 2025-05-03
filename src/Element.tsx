import './index.css'
import React from "react";


interface ElementProps {
    elementData: any 
    elementInfoSetter: React.Dispatch<React.SetStateAction<any|null>>
}

export const Element: React.FC<ElementProps> = ({elementData, elementInfoSetter}: ElementProps) => {
    return (
        <>
            <div className="w-100 h-100 ps-1 pe-1 pt-1 pb-1">
                <span><button className="w-100 h-100" onClick={() => elementInfoSetter(elementData)}>{elementData.symbol}<br/><small>{elementData.number}</small></button></span>
            </div>
        </>
    );
}
