import React from "react";

interface ElementInfoProps {
    elementData: any
}

export const ElementInfo: React.FC<ElementInfoProps> = ({elementData}: ElementInfoProps) => {
    return (
        <>
            <div aria-label="element information" className="bg-secondary element-info text-white">
                <p>symbol: {elementData != null && elementData.symbol}</p>
                <p>atomic number: {elementData != null && elementData.number}</p>
                <p>appearance: {elementData != null && elementData.appearance}</p>
                <p>boiling point: {elementData != null && elementData.boil}K</p>
                <p>discovered by: {elementData != null && elementData.discovered_by}</p>
                <img className="p-5" src={elementData.bohr_model_image} alt={"image of " + elementData.symbol} />
                </div>

        </>
    );
}



