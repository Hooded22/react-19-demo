import {useOptimistic, useRef, useState} from "react";
import {deliverMessage} from "./actions.js";

type Message = {
    text: string;
    sending?: boolean;
};

type ThreadProps = {
    messages: Message[];
    sendMessage: (formData: FormData) => Promise<void>;
};

function Thread({messages, sendMessage}: ThreadProps) {
    const formRef = useRef<HTMLFormElement>(null);

    async function formAction(formData: FormData) {
        addOptimisticMessage(formData.get("message") as string);
        formRef?.current?.reset();
        await sendMessage(formData);
    }

    const [optimisticMessages, addOptimisticMessage] = useOptimistic(
        messages,
        (state, newMessage: string) => [
            ...state,
            {
                text: newMessage,
                sending: true
            }
        ]
    );

    return (
        <>
            {optimisticMessages.map((message, index) => (
                <div key={index}>
                    {message.text}
                    {!!message.sending && <small> (Sending...)</small>}
                </div>
            ))}
            <form action={formAction} ref={formRef}>
                <input type="text" name="message" placeholder="Hello!"/>
                <button type="submit">Send</button>
            </form>
        </>
    );
}

export default function UseOptimisticExample() {
    const [messages, setMessages] = useState<Message[]>([
        {text: "Hello there!", sending: false}
    ]);

    async function sendMessage(formData: FormData): Promise<void> {
        const sentMessage = await deliverMessage(formData.get("message") as string);
        setMessages((messages) => [...messages, {text: sentMessage}]);
    }

    return <Thread messages={messages} sendMessage={sendMessage}/>;
}
