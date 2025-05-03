import React, { SetStateAction } from "react";
import { Element } from "./Element";

interface PeriodicTableProps {
    elements: any[]
    elementInfoSetter: React.Dispatch<React.SetStateAction<any|null>>
}

export const PeriodicTable: React.FC<PeriodicTableProps> = ({elements, elementInfoSetter}: PeriodicTableProps) => {
    let rows = [];
    for(let i = 1; i < 8; i++) {
        rows.push(row(elements, i, elementInfoSetter));
    }

    const lanthanoids = elements.filter(e => e.number >= 57 && e.number <= 71);
    const actinoids = elements.filter(e => e.number >= 89 && e.number <= 103);

    return (
    <>
        <table>
            <thead>
                <tr key={2003}>
                    {Array.from({ length: 18 }, (_, i) => (<td key={i}>{i + 1}</td>))}
                </tr>
            </thead>
            <tbody>
                {rows}
                <tr key={2001}>
                    <td key={10001}></td>
                    { lanthanoids.map((element) => (
                        <td key={1000 + element.number}><Element elementData={element} elementInfoSetter={elementInfoSetter} /></td>
                    ))}
                </tr>
                <tr key={2002}>
                    <td key={10000}></td>
                    { actinoids.map((element) => (
                        <td key={1000 + element.number}><Element elementData={element} elementInfoSetter={elementInfoSetter} /></td>
                    ))}
                </tr>
            </tbody>
        </table>
    </> 
    );
}

function isLanthanoidOrAktanoid(element: any): boolean {
    if((element.number >= 57 && element.number <= 71)
       || (element.number >= 89 && element.number <= 103)) {
        return true; 
    }
    return false;
}

function row(elements: any[], period: number, elementInfoSetter: React.Dispatch<SetStateAction<any|null>>) {
    let rowList = [];
    
    for(let i = 1; i <= 18; i ++) {
        const filter = elements.filter((e) => e.period === period && e.group === i);
        
        if(filter.length == 0) {
            rowList.push(<td key={i}></td>);
            continue; 
        }
        const find = filter.find((e) => !isLanthanoidOrAktanoid(e));
        if(find !== undefined) {
            rowList.push(<td key={i}><Element elementData={find} elementInfoSetter={elementInfoSetter} /></td>);
        } else {
            rowList.push(<td key={i}></td>);
        }

    }

    return (<tr key={period}>{rowList}</tr>);
}

