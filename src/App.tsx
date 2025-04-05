import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { fetchAndStoreElements, getElements } from "./Utils"
import { useEffect, useState } from "react";
import { PeriodicTable } from "./PeriodicTable";
import { ElementInfo } from './ElementInfo';
import { ElementSearch } from './ElementSearch';

function App() {
    document.documentElement.lang = 'en';
    document.body.style.backgroundColor = 'gray';
    document.body.style.color = 'black';
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
            <ElementSearch elements={elementList} elementInfoSetter={setElementInfo} />
            <br />
            <br />
            <main className='d-flex flex-wrap'>
                    <div className='p-3'>
                    {
                        dataStatus && (
                            <PeriodicTable elements={elementList} elementInfoSetter={setElementInfo} />
                    )}
                      { !dataStatus && <p>No data available</p> }
                    </div>

                    <article aria-label="element info" role="article" className='p-3 element-info'>
                        { elementInfo != null && (<ElementInfo elementData={elementInfo}/>) }
                    </article>

                </main>
        </>
    );
}

export default App
