import React from "react";

interface ElementInfoProps {
    elementData: any;
}

export const ElementInfo: React.FC<ElementInfoProps> = ({elementData}: ElementInfoProps) => {
    return (
        <>
            <p>{elementData.name}</p>
            <p>symbol: {elementData.symbol}</p>
            <p>atomic number: {elementData.number}</p>
            <p>appearance: {elementData.appearance}</p>
            <p>boiling point: {elementData.boil}K</p>
            <p>discovered by: {elementData.discovered_by}</p>
        </>
    );
}
