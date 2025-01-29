import { AddToCartForm as AddToCartFormSimple } from "./FormActionExample1/AddToCartForm"
import { AddToCartForm as AddToCartFormComplex } from "./FormActionExample2/AddToCartForm"


export const FormActionExample = () => {
    return (
        <div>
            <h2>Example with simple error handling</h2>
            <>
                <AddToCartFormSimple itemID="1" itemTitle="JavaScript: The Definitive Guide" />
                <AddToCartFormSimple itemID="2" itemTitle="JavaScript: The Good Parts" />
            </>
            <h2>Example with more complex form state handling</h2>
            <>
                <AddToCartFormComplex itemID="1" itemTitle="JavaScript: The Definitive Guide" />
                <AddToCartFormComplex itemID="2" itemTitle="JavaScript: The Good Parts" />
            </>
        </div>
    )
}