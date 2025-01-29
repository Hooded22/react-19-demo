import { startTransition } from "react";

interface ItemProps {
    action: (newQuantity: number) => Promise<void>
}

export default function Item({ action }: ItemProps) {
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        // To expose an action prop, call the callback in startTransition.
        startTransition(async () => {
            action(parseInt(event.target.value));
        })
    }
    return (
        <div className="item">
            <span>Eras Tour Tickets</span>
            <label htmlFor="name">Quantity: </label>
            <input
                type="number"
                onChange={handleChange}
                defaultValue={1}
                min={1}
            />
        </div>
    )
}
