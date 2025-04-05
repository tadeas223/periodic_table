import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { fetchAndStoreElements, getElements } from "./Utils"
import { useEffect, useState } from "react";
import { PeriodicTable } from "./PeriodicTable";
import { ElementInfo } from './ElementInfo';

function App() {
    document.documentElement.lang = 'en';
    const [dataStatus, setDataStatus] = useState<boolean>(false);
    const [elementList, setElementList] = useState<any[]>([]);
    const [elementInfo, setElementInfo] = useState<any|null>(null); 
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
            <header><h1>Periodic Table</h1></header>
            <br />
            <div className='d-flex flex-wrap'>
                    <main className='p-3'>
                    {
                        dataStatus && (
                            <PeriodicTable elements={elementList} elementInfoSetter={setElementInfo} />
                    )}
                      { !dataStatus && <p>No data available</p> }
                    </main>

                    <section className='p-3 element-info'>
                        { elementInfo != null &&(<ElementInfo elementData={elementInfo} open={elementInfo != null} onClose={() => setElementInfo(null)}/>) }
                    </section>

                </div>
        </>
    );
}

export default App
