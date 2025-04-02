import { useState } from "react";
import { ElementInfo } from "./ElementInfo";

interface ElementProps {
    elementData: any 
}

export const Element: React.FC<ElementProps> = ({elementData}: ElementProps) => {
    const [info, setInfo] = useState<boolean>(false);
    return (
        <>
            <span><button onClick={() => setInfo(!info)}>{elementData.symbol}<br/><small>{elementData.number}</small></button></span>
            {info ? (<ElementInfo elementData={elementData} />) : null}
        </>
    );
}
