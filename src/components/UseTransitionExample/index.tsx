import UpdateWithoutUseTransition from "./UpdateWithoutUseTransition"
import { UpdateWithUseTransition } from "./UpdateWIthUseTransition"

export const UseTransitionExample = () => {
    return (
        <div>
            <h1>With use transition</h1>
            <UpdateWithUseTransition />
            <h1>Without use transition</h1>
            <UpdateWithoutUseTransition />
        </div>
    )
}