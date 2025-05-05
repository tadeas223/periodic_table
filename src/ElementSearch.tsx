import { useEffect, useState } from "react"
import { Element } from "./Element";

interface ElementSearchProps {
    elements: any[]
    elementInfoSetter: React.Dispatch<React.SetStateAction<any|null>>
}

export const ElementSearch: React.FC<ElementSearchProps> = ({elements, elementInfoSetter}: ElementSearchProps) => {
    const [search, setSearch] = useState<string|null>(null);
    const [list, setList] = useState<any[]|null>(null); 
    

    useEffect(() => {
        console.log(search);
        console.log(elements);
        setList(searchFunc(search, elements));
    }, [search]);

    return (
        <>
            <p><label htmlFor="search">search element:</label></p>
            <input id="search" type="text" onChange={(e) => {setSearch(e.target.value)}}/>
            <br /> 
            <br /> 
            <div className="d-flex flex-wrap">
              {list != null && 
                list.map((e: any) => (
                  <div><Element key={e.id} elementData={e} elementInfoSetter={elementInfoSetter} /></div>
                ))
              }
            </div>
        </>
    )
}

function searchFunc(search: string|null, elements: any[]) {
    let list: string[] = [];
    if(search != null && search != "") {
        elements.forEach((e: any) => {
            if(e.symbol.toLowerCase().startsWith(search.toLowerCase()) || e.name.toLowerCase().startsWith(search.toLowerCase())) {
                list.push(e); 
            }
        });
    }
    return list;
};
