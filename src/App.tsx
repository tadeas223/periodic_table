import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { fetchAndStoreElements, getElements } from "./Utils"
import { useEffect, useState } from "react";
import { PeriodicTable } from "./PeriodicTable";
import { ElementInfo } from './ElementInfo';
import { ElementSearch } from './ElementSearch';

function App() {
    document.documentElement.lang = 'en';
    const [dataStatus, setDataStatus] = useState<boolean>(false);
    const [elementList, setElementList] = useState<any[]>([]);
    const [elementInfo, setElementInfo] = useState<any|null>(null); 
    const [darkTheme, setDarkTheme] = useState<boolean>(false);


    useEffect(() => {
        fetchAndStoreElements(setDataStatus);
    }, []);

    useEffect(() => {
        if(dataStatus) {
            setElementList(getElements());
        }
    }, [dataStatus]);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkTheme);
        if(darkTheme) {
            document.documentElement.style.backgroundColor = "#24273a";
            document.body.style.backgroundColor = "#24273a";
        } else {
            document.documentElement.style.backgroundColor = "#eff1f5";
            document.body.style.backgroundColor = "#eff1f5";
        }
    }, [darkTheme]);

    return (
        <div className="App">
            <div className="p-4 mt-1">
                <h1>Periodic Table</h1>
                <label htmlFor='scheme' className="me-2">dark theme: </label>
                <input type='checkbox' onChange={(e) => {
                    setDarkTheme(e.target.checked);
                }}></input>
                <br />
                <ElementSearch elements={elementList} elementInfoSetter={setElementInfo} />
                <br />
                <br />
            </div>
            <main className='container'>
                {
                    dataStatus && (
                        <div className="row flex-wrap">
                            <div className="col" /* style={{backgroundColor: 'purple'}} */>
                                <PeriodicTable elements={elementList} elementInfoSetter={setElementInfo} />
                            </div>
                            <div className="col" /* style={{backgroundColor: 'green'}} */>
                                <ElementInfo elementData={elementInfo}/>
                            </div>
                        </div>
                )}
                { !dataStatus && <p>No data available</p> }
            </main>
        </div>
    );
}

export default App
