import { useState } from "react";
import { updateQuantity } from "./api";
import Item from "./Item";
import Total from "./Total";

export default function UpdateWithoutUseTransition({ }) {
    const [quantity, setQuantity] = useState<number>(1);
    const [isPending, setIsPending] = useState(false);

    const onUpdateQuantity = async (newQuantity: number) => {
        // Manually set the isPending State.
        setIsPending(true);
        const savedQuantity = await updateQuantity(newQuantity);
        setIsPending(false);
        setQuantity(savedQuantity);
    };

    return (
        <div>
            <h1>Checkout</h1>
            <Item action={onUpdateQuantity} />
            <hr />
            <Total quantity={quantity} isPending={isPending} />
        </div>
    );
}