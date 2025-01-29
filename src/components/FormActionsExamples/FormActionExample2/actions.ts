"use server";

type EmptyState = {
    success: undefined
}

type SuccessState = {
    success: true;
    cartSize: number;
};

type ErrorState = {
    success: false;
    message: string;
};

type CartState = SuccessState | ErrorState | EmptyState;

export async function addToCart(prevState: CartState, queryData: FormData): Promise<CartState> {
    const itemID = queryData.get("itemID");
    console.log("prevState", prevState)

    if (itemID === "1") {
        return {
            success: true,
            cartSize: 12,
        };
    } else {
        return {
            success: false,
            message: "The item is sold out.",
        };
    }
}