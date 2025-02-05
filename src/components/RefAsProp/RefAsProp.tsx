import { useRef } from "react";
import { MyInput } from "./MyInput";

export const RefAsProp = () => {
    const ref = useRef<HTMLInputElement>(null);

    const focusInput = () => {
        ref.current?.focus()
    }

    return (
        <div>
            <h2>Passing ref into MyInput as props</h2>
            <MyInput ref={ref} />
            <button onClick={focusInput}>Focus input</button>
        </div>
    )
}