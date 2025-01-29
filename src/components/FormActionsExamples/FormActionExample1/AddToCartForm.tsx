import { useActionState } from "react";
import { addToCart } from "./actions";
import styles from "./AddToCartForm.module.css";

export const AddToCartForm = ({ itemID, itemTitle }: { itemID: string, itemTitle: string }) => {
    const [message, formAction, isPending] = useActionState(addToCart, null)

    return (
        <form action={formAction} className={styles.container}>
            <h2 className={styles.title}>{itemTitle}</h2>
            <input type="hidden" name="itemID" value={itemID} />
            <button type="submit" className={styles.button}>Add to Cart</button>
            {isPending || message ? (
                <div className={styles.message}>
                    {isPending ? "Loading..." : message}
                </div>
            ) : null}
        </form>
    );
};