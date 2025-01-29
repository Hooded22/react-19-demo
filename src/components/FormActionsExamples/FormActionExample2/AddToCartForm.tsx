import { useActionState } from "react";
import { addToCart } from "./actions";
import styles from './AddToCartForm.module.css'

export const AddToCartForm = ({ itemID, itemTitle }: { itemID: string, itemTitle: string }) => {
    const [formState, formAction] = useActionState(addToCart, {
        success: undefined,
    });

    return (
        <form action={formAction} className={styles.container}>
            <h2 className={styles.title}>{itemTitle}</h2>
            <input type="hidden" name="itemID" value={itemID} />
            <button type="submit" className={styles.button}>Add to Cart</button>
            {formState?.success &&
                <div className={styles.message}>
                    Added to cart! Your cart now has {formState.cartSize} items.
                </div>
            }
            {formState?.success === false &&
                <div className={styles.message}>
                    Failed to add to cart: {formState.message}
                </div>
            }
        </form>
    );
}