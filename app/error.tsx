"use client"

import { useEffect } from "react"

export default function Error({error}: {error: any}, reset: () => void){
    useEffect(() =>{
        console.log(error);
    }, [error]);

    return (
        <div className="text-center">
            <h1>Something went wrong!!</h1>
            <button className="hover:text-amber-600" onClick={() => reset()}>Try Again</button>
        </div>
    )
}