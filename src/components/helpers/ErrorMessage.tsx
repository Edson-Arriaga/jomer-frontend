import { ReactNode } from "react";

export default function ErrorMessage({children} : {children : ReactNode}) {
    return (
        <div className="bg-red-600 mt-3 p-2 text-center">
            <p className="text-white">{children}</p>
        </div>
    )
}
