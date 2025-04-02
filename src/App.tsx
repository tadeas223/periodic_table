import { fetchAndStoreElements, getElements } from "./Utils"
import { Element} from "./Element"
import { useEffect, useState } from "react";
import { PeriodicTable } from "./PeriodicTable";

function App() {
    const [dataStatus, setDataStatus] = useState<boolean>(false);
    const [elementList, setElementList] = useState<any[]>([]);
    
    useEffect(() => {
        fetchAndStoreElements(setDataStatus);
    }, []);

    useEffect(() => {
        if(dataStatus) {
            setElementList(getElements());
        }
    }, [dataStatus]);

    return (
        <>
            {
                dataStatus && (
                    <>
                        <PeriodicTable elements={elementList}/>
                    </>
            )}
            { !dataStatus && <p>No data available</p> }
        </>
    );
}

export default App
