import React from "react";
import { Element } from "./Element";

interface PeriodicTableProps {
    elements: any[]
}

export const PeriodicTable: React.FC<PeriodicTableProps> = ({elements}: PeriodicTableProps) => {
    let rows = [];
    for(let i = 1; i < 8; i++) {
        rows.push(row(elements, i));
    }
    return (
        <> 
            <table>
                <thead>
                    <tr>
                        {Array.from({ length: 18 }, (_, i) => (<th key={i}>{i + 1}</th>))}
                    </tr>
                </thead>
                <tbody>
                    {rows}
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

function row(elements: any[], period: number) {
    let rowList = [];
    
    for(let i = 1; i <= 18; i ++) {
        const filter = elements.filter((e) => e.period === period && e.group === i);
        
        if(filter.length == 0) {
            rowList.push(<td key={i}></td>);
            continue; 
        }
        const find = filter.find((e) => !isLanthanoidOrAktanoid(e));
        if(find !== undefined) {
            rowList.push(<td key={i}><Element elementData={find} /></td>);
        } else {
            rowList.push(<td key={i}></td>);
        }



//        for(let j = 0; j < filter.length; j++) {
//            if(filter[j] === undefined && isLanthanoidOrAktanoid(filter[j])) {
//                rowList.push(<td key={i}></td>);
//            } else {
//                rowList.push(<td key={i}><Element elementData={filter[j]} /></td>);
//            }
//        } 
    }

    return (<tr key={period}>{rowList}</tr>);
}

