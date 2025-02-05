import { RefObject, useImperativeHandle } from "react"

interface MyInputProps {
    ref: RefObject<HTMLInputElement | null>
}

export const MyInput = ({ ref }: MyInputProps) => {

    return <input type="text" ref={(current) => {
        //Setting ref.current instead of return current due to new cleanup ref function introduction in React19
        ref.current = current

        return () => {
            console.log("Ref clean up function")
        }
    }} />
}