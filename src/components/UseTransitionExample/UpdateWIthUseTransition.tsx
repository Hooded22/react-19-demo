import { useState, useTransition } from "react";
import { updateQuantity } from './api.ts'
import Item from "./Item.tsx";
import Total from "./Total.tsx";

export function UpdateWithUseTransition({ }) {
    const [quantity, setQuantity] = useState<number>(1);
    const [isPending, startTransition] = useTransition();

    const updateQuantityAction = async (newQuantity: number) => {
        // To access the pending state of a transition,
        // call startTransition again.
        startTransition(async () => {
            const savedQuantity = await updateQuantity(newQuantity);
            startTransition(() => {
                setQuantity(savedQuantity);
            });
        });
    };

    return (
        <div>
            <h1>Checkout</h1>
            <Item action={updateQuantityAction} />
            <hr />
            <Total quantity={quantity} isPending={isPending} />
        </div>
    );
}