import { RefObject, useImperativeHandle } from "react"

interface MyInputProps {
    ref: RefObject<HTMLInputElement | null>
}

export const MyInput = ({ ref }: MyInputProps) => {

    return <input type="text" ref={ref} />
}