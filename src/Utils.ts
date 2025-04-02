import React from "react"

const dataUrl = 'https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/refs/heads/master/PeriodicTableJSON.json';

async function fetchJson() {
    const response = await fetch(dataUrl);
    if(!response.ok) throw new Error("Failed to fetch data");

    const result = await response.json();
    return result;
}

export async function fetchAndStoreElements(setStatus: React.Dispatch<React.SetStateAction<boolean>>) {
    const data = await fetchJson();
    sessionStorage.setItem("elements", JSON.stringify(data.elements));
    setStatus(true);
}

export function getElements(): any[] {
    const data = sessionStorage.getItem("elements");
    if(data == null) {
        throw new Error("No elements loaded");
    }

    const parse = JSON.parse(data) as any[];
    return parse;
}
