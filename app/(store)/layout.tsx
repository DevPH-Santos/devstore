import { ReactNode } from "react";
import { Header } from "../components/header";

export default function StoreLatyout( {children} : { children: ReactNode } ) {
    return(
        <div className="mx-auto grid min-h-screen w-full max-w-400 grid-rows-[min-content_max-content] gap-5 p-8">

            <Header/>
            {children}

        </div>
    )
}