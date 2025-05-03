import React from "react";

interface ElementInfoProps {
    elementData: any
}

export const ElementInfo: React.FC<ElementInfoProps> = ({elementData}: ElementInfoProps) => {
    if(elementData == null) {
        return (
        <>
            <div className="element-info">
                <p>Click any element to get its information</p>
            </div>
        </>
        );
    } 
    return (
        <>
            <div className="element-info">
                <p>symbol: {elementData != null && elementData.symbol}</p>
                <p>name: {elementData != null && elementData.name}</p>
                <p>atomic number: {elementData != null && elementData.number}</p>
                <p>appearance: {elementData != null && elementData.appearance}</p>
                <p>boiling point: {elementData != null && elementData.boil}K</p>
                <p>discovered by: {elementData != null && elementData.discovered_by}</p>
                <img className="p-2 pb-5" src={elementData.bohr_model_image} alt={"image of " + elementData.symbol} />
            </div>

        </>
    );
}



