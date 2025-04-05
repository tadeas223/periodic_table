import React from "react";

interface ElementProps {
    elementData: any 
    elementInfoSetter: React.Dispatch<React.SetStateAction<any|null>>
}

export const Element: React.FC<ElementProps> = ({elementData, elementInfoSetter}: ElementProps) => {
    return (
        <>
            <span><button aria-label="element" className="element-box" onClick={() => elementInfoSetter(elementData)}>{elementData.symbol}<br/><small>{elementData.number}</small></button></span>
        </>
    );
}
